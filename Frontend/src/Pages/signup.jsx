import { Container, Input, Text } from "@chakra-ui/react"

export const Signup = () =>{

    return <>
    
    <Container>
        <Text>Signup here !</Text>
        <Input type="text" placeholder="username" autoCorrect="on" spellCheck />
        <Input type="email" placeholder="email" autoCorrect="on" spellCheck />
        <Input type="password" placeholder="password" autoCorrect="on" spellCheck />


    </Container>
    
    
    </>


}