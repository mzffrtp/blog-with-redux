import React, {useEffect} from "react";

/* api */
import api from "../../api/api";
import urls from "../../api/urls";

/* redux */
import ActionTypes from "../../redux/actions/ActionTypes";
import { useDispatch } from "react-redux";




const BlogFetch = () => {
    const dispatch = useDispatch();
    useEffect (()=>{
        dispatch({type:ActionTypes.blogActions.GET_BLOG_START})
        api
            .get(urls.blogs)
            .then((res)=>{
                dispatch({
                    type:ActionTypes.blogActions.GET_BLOG_SUCCESS,
                    payload: res.data
                })

            })
            .catch((err)=>{
                dispatch({
                    type:ActionTypes.blogActions.GET_BLOG_FAIL,
                    payload:"An error occured during fetching!"
                })

            })
    },[])
}

export default BlogFetch
