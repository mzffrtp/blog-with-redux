import React from "react";
import "../assets/styles/header.css";
import logo from "../assets/imgs/blog-logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../redux/actions/ActionTypes";

const Header = () => {
    const { loginState } = useSelector(state => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="navbarWrapper">
                <div className="logoContainer">
                    <img
                        style={{ width: "9rem" }}
                        src={logo} alt="" />
                    <Link
                        className="navbar-brand"
                        style={{
                            fontSize: "2rem",
                            color: "crimson"
                        }}
                        to="/">My8log</Link>
                </div>
                <div className="menuLists">
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"#"}>About</Link>
                        </li>
                        <li>
                            <Link to={"#"}>Blogs</Link>
                        </li>
                        <li>
                            {
                                !loginState.success ? (
                                    <div>
                                        <li >
                                            <Link
                                                className="btn btn-outline-primary loginBtn"
                                                to={"/login"}>Login</Link>
                                        </li>
                                    </div>
                                ) : (
                                    <div>
                                        <li>
                                            <Link
                                                className="btn btn-outline-warning"
                                                to={"/admin"}
                                                style ={{
                                                    width:"175px"
                                                }}>Admin Panel
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="d-flex gap-3">
                                                <button className="btn btn-outline-info my-3">{loginState.user.username}</button>
                                                <button
                                                    className="btn btn-outline-danger my-3"
                                                    onClick={()=> {dispatch({
                                                        type:ActionTypes.loginActions.LOGOUT
                                                    })}}>Logout</button>
                                            </div>
                                        </li>
                                    </div>
                                )
                            }
                        </li>
                    </ul>
                </div>

            </div>

        </nav >
    )
}

export default Header