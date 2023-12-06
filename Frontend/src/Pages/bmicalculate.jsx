import { Button, Container, Input, Text } from "@chakra-ui/react"

export const BmiCalculate = () =>{


    return <>
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center",marginTop:"30px"}}>
        <div style={{border:"1px solid red",padding:"50px"}}>
            <Text color={"teal"} fontFamily={"cursive"} fontWeight={"bold"}>Calculate Your Body Mass Index</Text>
<Container marginTop={"30px"} padding={"30px"} width={"100%"}>
    <form >
    <Input type="number" placeholder={"Enter your Height in feet"} /> <br /><br />
    <Input type="number" placeholder={"Enter your weight in Kgs"} /> <br /><br />
    <Button colorScheme="teal" fontFamily={"cursive"} fontWeight={"bold"} width={"100%"}>Calculate BMI</Button>
    </form>

</Container>


        </div>
        <div>Calculated data</div>
    </div>
    
    </>
}