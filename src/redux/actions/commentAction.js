import request from "../../utils/axios";
import {
  COMMENT_FAILED,
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_SUCCESS,
} from "../actionTypes";

export const getCommentsByVideoId = (videoId) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_REQUEST,
    });

    const { data } = await request("/commentThreads", {
      params: {
        part: "snippet",
        videoId: videoId,
      },
    });
    // console.log(data.items);

    dispatch({
      type: COMMENT_SUCCESS,
      payload: [...data.items],
    });
  } catch (error) {
    console.log("error " + error);
    dispatch({
      type: COMMENT_FAILED,
      message: error.message,
    });
  }
};

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await request.post("/commentThreads", obj, {
      params: {
        part: "snippet",
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    });

    setTimeout(() => dispatch(getCommentsByVideoId(id)), 3000);
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_COMMENT_FAIL,
      // payload: error.response.data.message,
    });
  }
};
