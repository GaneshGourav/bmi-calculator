import { Button, Container, Input, Text } from "@chakra-ui/react"

export const Login = () =>{
    return<>
    <Container>
        <Text  color={"teal"}
          fontWeight={"bold"}
          fontFamily={"cursive"}
          marginTop={"30px"}
          marginBottom={"30px"}>Login here !</Text>
        <Input type="email" placeholder="Enter your Email" autoCorrect="on" spellCheck /><br /><br />
        <Input type="password" placeholder="Enter your Password" autoCorrect="on" spellCheck /><br /> <br />
        <Button>Login</Button>
    </Container>
    
    
    </>
}