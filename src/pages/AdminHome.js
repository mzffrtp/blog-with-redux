import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const AdminHome = () =>{
    const navigate = useNavigate();
    const {loginState} = useSelector(state=>state);

    useEffect(()=>{
        if(!loginState.success) navigate("/login")
    }, [loginState])
    
    return(
        <div>
            <Header />
        <p>admin home</p>

        </div>
    )
}

export default AdminHome