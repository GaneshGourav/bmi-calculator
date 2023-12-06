import { Button, Container, Input, Text } from "@chakra-ui/react"

export const BmiCalculate = () =>{


    return <>
    <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <div style={{border:"1px solid red"}}>
            <Text color={"teal"} fontFamily={"cursive"} fontWeight={"bold"}>Calculate Your Body Mass Index</Text>
<Container>
    <form >
    <Input type="number" placeholder={"Enter your Height in feet"} />
    <Input type="number" placeholder={"Enter your weight in Kgs"} />
    <Button colorScheme="teal" fontFamily={"cursive"} fontWeight={"bold"}>Calculate BMI</Button>
    </form>

</Container>


        </div>
        <div>Calculated data</div>
    </div>
    
    </>
}