import request from "../../utils/axios"
import { HOME_REQUEST, HOME_SUCCESS } from "../actionTypes"

export const getPopularVideos = () => async dispatch =>{
   try {
    dispatch({
        type:HOME_REQUEST
    })

    const res = await request('/videos',{
        params:{
            part:'snippet,contentDetails,statistics',
            chart:'mostPopular',
            regionCode:'IN',
            maxResults:20,
            
        }
    })
    console.log(res)
    
    dispatch({
        type:HOME_SUCCESS,
        payload:res.data
    })

   } catch (error) {
       console.log("error "+ error)
   }
   
}