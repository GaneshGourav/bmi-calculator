import { Button, Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../redux/Authentication/action";
import { USER_SIGNUP_ERROR, USER_SIGNUP_SUCCESS } from "../redux/Authentication/actionTypes";
import { useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate()
  const isloading = useSelector((store)=>store.signUpReducer.isLoading)
  console.log(isloading)

  const handleForm = (e) =>{
    e.preventDefault()
    const userdetails = {username,email,password};
    console.log(userdetails)
    handleSignup(userdetails)
  }

  const handleSignup = (userdetails) =>{
    
    dispatch(userSignup(userdetails)).then((res)=>{
      dispatch({type:USER_SIGNUP_SUCCESS})
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      console.log(res.data)
      navigate("/account-login")
    }).catch((err)=>{
      dispatch({type:USER_SIGNUP_ERROR})
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
          Signup here !
        </Text>
        <form onSubmit={handleForm} >
        <Input
          type="text"
          placeholder="username"
          border={"1px solid teal"}
          autoCorrect="on"
          spellCheck
          autoFocus
          required
          onChange={(e)=>setUsername(e.target.value)}
        />{" "}
        <br />
        <br />
        <Input
          type="email"
          placeholder="email"
          border={"1px solid teal"}
          autoCorrect="on"
          spellCheck
          required
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br />
        <br />
        <Input
          type="password"
          placeholder="password"
          border={"1px solid teal"}
          autoCorrect="on"
          spellCheck
          required
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br />
        <br />
        <br />
        {isloading ?  <Button
    isLoading
    loadingText='Loading...'
    colorScheme='teal'
    width={"100%"}
   
  />
    
   :<Button colorScheme="teal" width={"100%"} type="submit">
        Signup
        </Button>}
        </form>
        <br />
        <br />
        <Text>
          If you are already registered{" "}
          <span
            style={{ color: "teal", fontWeight: "bold", fontFamily: "cursive" }}
          >
            <a href="/account-login">login here</a>
          </span>{" "}
        </Text>
      </Container>
    </>
  );
};
