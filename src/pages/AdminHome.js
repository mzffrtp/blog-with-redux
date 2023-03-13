import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminHome = () =>{
    const navigate = useNavigate();
    const {loginState} = useSelector(state=>state);

    useEffect(()=>{
        if(!loginState.success) navigate("/login")
    }, [])
    
    return(
        <p>admin home</p>
    )
}

export default AdminHome