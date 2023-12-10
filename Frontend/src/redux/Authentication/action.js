import axios from "axios";
import { GET_DATA_REQ, POST_DATA_REQ, USER_LOGIN_REQ, USER_SIGNUP_REQ } from "./actionTypes";

export const userSignup = (userData) => (dispatch) =>{
    dispatch({type:USER_SIGNUP_REQ})

    return axios.post("https://bmi-api-gcmc.onrender.com/signup",userData)
}

export const userLogin = () => (dispatch) =>{
    dispatch({type:USER_LOGIN_REQ})
    return axios.get("https://bmi-api-gcmc.onrender.com/signup")
}

export const dataPost = (data) => (dispatch) =>{
    dispatch({type:POST_DATA_REQ})
    return axios.post("https://bmi-api-gcmc.onrender.com/bmiHistory",data)
}

export const getData = () => (dispatch) =>{
    dispatch({type:GET_DATA_REQ})
    return axios.get("https://bmi-api-gcmc.onrender.com/bmiHistory")
}