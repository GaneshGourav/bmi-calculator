import { Container, Input, Text } from "@chakra-ui/react"

export const Login = () =>{
    return<>
    <Container>
        <Text  color={"teal"}
          fontWeight={"bold"}
          fontFamily={"cursive"}
          marginTop={"30px"}
          marginBottom={"30px"}>Login here !</Text>
        <Input type="email" placeholder="email" autoCorrect="on" spellCheck />
        <Input type="password" placeholder="password" autoCorrect="on" spellCheck />
    </Container>
    
    
    </>
}