import { Button, Container, Input, Text } from "@chakra-ui/react"

export const Signup = () =>{

    return <>
    
    <Container>
        <Text color={"teal"} fontSize={"bold"} fontFamily={"cursive"} marginTop={"30px"} marginBottom={"30px"}>Signup here !</Text>
        <Input type="text" placeholder="username" border={"1px solid teal"} autoCorrect="on" spellCheck /> <br /><br />
        <Input type="email" placeholder="email"  border={"1px solid teal"} autoCorrect="on" spellCheck /><br /><br />
        <Input type="password" placeholder="password"  border={"1px solid teal"} autoCorrect="on" spellCheck /><br /><br /><br />
        <Button colorScheme="teal" width={"100%"}>SignUp</Button>


    </Container>
   
    
    
    </>


}