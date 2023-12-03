import { Container, Input, Text } from "@chakra-ui/react"

export const Signup = () =>{

    return <>
    
    <Container>
        <Text>Signup here !</Text>
        <Input type="text" autoCorrect="on" spellCheck />
        <Input type="email" autoCorrect="on" spellCheck />
        <Input type="password" autoCorrect="on" spellCheck />


    </Container>
    
    
    </>


}