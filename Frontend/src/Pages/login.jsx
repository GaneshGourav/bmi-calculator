import { Container, Text } from "@chakra-ui/react"

export const Login = () =>{
    return<>
    <Container>
        <Text>Login here !</Text>
        <Input type="email" placeholder="email" autoCorrect="on" spellCheck />
        <Input type="password" placeholder="password" autoCorrect="on" spellCheck />
    </Container>
    
    
    </>
}