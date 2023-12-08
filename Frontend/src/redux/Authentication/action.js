import axios from "axios";
import { USER_LOGIN_REQ, USER_SIGNUP_REQ } from "./actionTypes";

export const userSignup = (userData) => (dispatch) =>{
    dispatch({type:USER_SIGNUP_REQ})

    return axios.post("https://bmi-api-gcmc.onrender.com/signup",userData)
}

export const userLogin = () => (dispatch) =>{
    dispatch({type:USER_LOGIN_REQ})
    return axios("https://bmi-api-gcmc.onrender.com/signup")
}

export const dataPost = () => () =>{
    return axios.post()
}