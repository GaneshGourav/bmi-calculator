import axios from "axios";
import { USER_SIGNUP_REQ } from "./actionTypes";

export const userSignup = (userData) => (dispatch) =>{
    dispatch({type:USER_SIGNUP_REQ})

    return axios.post("https://bmi-api-gcmc.onrender.com/signup",userData)
}