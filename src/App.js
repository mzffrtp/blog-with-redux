import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/* redux */
import ActionTypes from "./redux/actions/ActionTypes";
import { useDispatch, useSelector } from "react-redux";

/* routing */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* component */
import GeneralModal from "./components/generalModal"

/* pages */
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Login from "./pages/Login";

/* api */
import api from "./api/api";
import urls from "./api/urls";


function App() {
  const dispatch = useDispatch();
  const {blogsState, categoriesState, usersState} = useSelector((state)=>state) 

  useEffect(() => {
    /* fetch blogs */
    dispatch({ type: ActionTypes.blogActions.GET_BLOG_START });
    api
      .get(urls.blogs)
      .then((res) => 
        dispatch({
          type: ActionTypes.blogActions.GET_BLOG_SUCCESS,
          payload: res.data
        })
      )
      .catch((err) => 
        dispatch({
          type: ActionTypes.blogActions.GET_BLOG_FAIL,
          payload: "An error occured during fetching!"
        })
      )
    /* fetch categories */
    dispatch({type:ActionTypes.categoryActions.GET_CATEGORY_START})
    api 
      .get(urls.categories)
      .then((catRes)=>
        dispatch({
          type: ActionTypes.categoryActions.GET_CATEGORY_SUCCESS,
          payload:catRes.data,
        })
      )
      .catch((err)=>
        dispatch({
          type:ActionTypes.categoryActions.GET_CATEGORY_FAIL,
          payload:"An error occured during fetching!"
        })
      )
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
      /* read loginstate from localstorage*/
      const loginStateFromLocalstorage = JSON.parse(
        localStorage.getItem("loginState"));

      if (loginStateFromLocalstorage === null){
        localStorage.setItem(
          "loginState", JSON.stringify(
            {pending:false,
            success:false,
            error:false,
            errorMessage:"",
            user:null,
          })
        )} else {
          if(loginStateFromLocalstorage.success){
            dispatch({
              type:ActionTypes.loginActions.LOGIN_SUCCESS,
              payload:loginStateFromLocalstorage.user
            })
          }
        }
  }, []);

  
 if (!blogsState.success || !categoriesState.success || !usersState.success) return null;

  if(blogsState.error || categoriesState.error || usersState.error)
  return <GeneralModal
  title = "Error"
  content = "An error occured during fetching data"
  />


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
