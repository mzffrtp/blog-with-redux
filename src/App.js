import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/* redux */
import ActionTypes from "./redux/actions/ActionTypes";
import { useDispatch } from "react-redux";

/* routing */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* pages */
import Home from "./pages/Home";

/* api */
import api from "./api/api";
import urls from "./api/urls";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    /* fetch blogs */
    dispatch({ type: ActionTypes.blogActions.GET_BLOG_START })
    api
      .get(urls.blogs)
      .then((res) => {
        dispatch({
          type: ActionTypes.blogActions.GET_BLOG_START,
          payload: res.data
        })
      })
      .catch((err) => {
        dispatch({
          type: ActionTypes.blogActions.GET_BLOG_FAIL,
          payload: "An error occured during fetching!"
        })
      })
    /* fetch categories */
    dispatch({type:ActionTypes.categoryActions.GET_CATEGORY_START})
    api
      .get(urls.categories)
      .then((res)=>{
        dispatch({
          type:ActionTypes.categoryActions.GET_CATEGORY_SUCCESS,
          payload: res.data
        })
      })
      .catch((err)=>{
        dispatch({
          type:ActionTypes.categoryActions.GET_CATEGORY_FAIL,
          payload:"An error occured during fetching!"
        })
      })
    /* fetch users */
    dispatch({type:ActionTypes.userActions.GET_USER_START})
    api
      .get(urls.users)
      .then((res)=>{
        dispatch({
          type:ActionTypes.userActions.GET_USER_SUCCESS,
          payload:res.data
        })
      })
      .catch((err)=>{
        dispatch({
          type:ActionTypes.userActions.GET_USER_FAIL,
          payload:"An error occured during fetching!"
        })
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
