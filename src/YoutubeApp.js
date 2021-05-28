import React, { useState } from "react";
import Header from "./components/header/Header";
import HomeScreen from "./components/screens/HomeScreen";
import { LoginScreen } from "./components/screens/LoginScreen";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { CLIENT_URL } from "./utils/contsants";
import { useSelector } from "react-redux";
import "./_app.scss";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const [sidebar, handleSidebar] = useState(false);
  const handleToggle = () => handleSidebar((val) => !val);
  return (
    <>
      <Header handleToggle={handleToggle} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
        <div className="app__main">{children}</div>
      </div>
    </>
  );
};

const YoutubeApp = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!accessToken && !loading) {
      history.push(`${CLIENT_URL}/auth`);
    }
  }, [accessToken, loading, history]);

  return (
    // <Router>
    <Switch>
      <Route path={`${CLIENT_URL}/auth`}>
        <LoginScreen />
      </Route>
      <Route exact path={`${CLIENT_URL}/`}>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route exact path={`${CLIENT_URL}/search`}>
        <Layout>
          <h1>Search Results</h1>
        </Layout>
      </Route>
      <Route>
        <Redirect to="/youtube-api-clone/" />
      </Route>
    </Switch>
    // </Router>
  );
};

export default YoutubeApp;
