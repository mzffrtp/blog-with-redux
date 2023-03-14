import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActionTypes from "../redux/actions/ActionTypes";
import { useNavigate } from "react-router-dom";

/* styling */
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import lgn from "../assets/imgs/loginimg.gif"

import GeneralModal from "../components/generalModal";

const Login = () => {
    const { usersState } = useSelector(state => state)
    const [errorModal, setErrorModal] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        password: ""
    })
    const handleLogin = (event) => {
        event.preventDefault()

        const hasUser = usersState.users.find((user) => user.username === form.username)

        if (hasUser === undefined || hasUser.password !== form.password) {
            setErrorModal(true)
            return
        }

        dispatch({
            type: ActionTypes.loginActions.LOGIN_SUCCESS,
            payload: {
                username: hasUser.username,
                role: hasUser.role
            }
        })
        const successLoginState = {
            ending: false,
            success: true,
            error: false,
            errorMessage: "",
            user: { username: hasUser.username, role: hasUser.role },
        };
        localStorage.setItem("loginState", JSON.stringify(successLoginState))
        navigate("/")

    }
    return (
        <div>
            <Form className="container my-5 w-75"
                onSubmit={handleLogin}>
                <h1 className="my-3 text-center">Login</h1>
                <div className="d-flex justify-content-center my-3">
                    <img
                        style={{ width: "5rem" }}
                        src={lgn} alt="" />
                </div>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        value={form.username}
                        onChange={(event) => setForm(
                            { ...form, username: event.target.value }
                        )}
                        type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={form.password}
                        onChange={(event) => setForm({
                            ...form, password: event.target.value
                        })}
                        type="password" placeholder="Password" />
                </Form.Group>
                <div className="d-flex justify-content-center my-5">
                    <Button variant="outline-info w-50" type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            {
                errorModal === true && (
                    <GeneralModal
                        title="Login Error"
                        content="Username or password is wrong!"
                        clsBtnTxt="Pls try again!"
                        clsBtnClck={() => setErrorModal(false)}
                    />
                )
            }
        </div>
    )
}

export default Login