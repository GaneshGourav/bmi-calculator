import { Button, Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/Authentication/action";
import { USER_LOGIN_ERROR, USER_LOGIN_SUCCESS } from "../redux/Authentication/actionTypes";
import { json } from "react-router-dom";

export const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [data,setData] = useState([])
    const dispatch = useDispatch();
    // const userdata = json.parse(localStorage.getItem("user")) || []
    const isLoading = useSelector((store)=>store.signUpReducer.isLoading)
    const handleLogin = (e) =>{
      e.preventDefault()
       
        dispatch(userLogin()).then((res)=>{
          dispatch({type:USER_LOGIN_SUCCESS})
         console.log(res.data.email)
    setData(res.data);
    const details = data.find((el)=> el.password === password && el.email===email);
    console.log("data",details)
    
    localStorage.setItem("user",JSON.stringify(details))
        }).catch((err)=>{
          dispatch({type:USER_LOGIN_ERROR})
          console.log(err)
        })
        
    }
  return (
    <>
      <Container
        border={"1px solid teal"}
        padding={"30px"}
        borderRadius={"8px"}
        marginTop={"5%"}
      >
        <Text
          color={"teal"}
          fontWeight={"bold"}
          fontFamily={"cursive"}
          marginTop={"30px"}
          marginBottom={"30px"}
        >
          Login here !
        </Text>
        <form onSubmit={handleLogin} >
          <Input
            type="email"
            placeholder="Enter your Email"
            border={"1px solid teal"}
            autoCorrect="on"
            spellCheck
            autoFocus
            
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <br />
          <Input
            type="password"
            placeholder="Enter your Password"
            border={"1px solid teal"}
            autoCorrect="on"
            spellCheck
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br /> <br /> <br />
          <Button colorScheme="teal" width={"100%"} type="submit">
            Login
          </Button>
          <br />
          <br />
        </form>
        <Text>
          If you are new then{" "}
          <span
            style={{ color: "teal", fontWeight: "bold", fontFamily: "cursive" }}
          >
            <a href="/account-signin">SignUp here</a>
          </span>{" "}
        </Text>
      </Container>
    </>
  );
};
