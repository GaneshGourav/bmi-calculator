import { Button, Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPost } from "../redux/Authentication/action";
import { POST_DATA_ERROR, POST_DATA_SUCCESS } from "../redux/Authentication/actionTypes";

export const BmiCalculate = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState("");
  const dispatch = useDispatch();
  // const isLoading = useSelector((store) => store.signUpReducer.isLoading);
  
  const handleCalculateBmi = (e) => {
    e.preventDefault();

    calculateBmi(weight, height);
    console.log(typeof bmi);
    
    
  };

  const postData = (data)=>{
dispatch(dataPost(data)).then((res)=>{
  dispatch({type:POST_DATA_SUCCESS,payload:res.data})
}).catch((err)=>{
  dispatch({type:POST_DATA_ERROR});
  console.log(err)
})
  }
  const calculateBmi = (weight, height) => {
    const BMI = ((weight / height) * 2).toFixed(2);
    setBmi(BMI);
    if (BMI <= 18.5) {
      setBmiCategory("You're Underweight");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setBmiCategory("You're Normal weight");
    } else if (BMI >= 25 && BMI <= 29.9) {
      setBmiCategory("You're Over weight");
    } else if (BMI >= 30) {
      setBmiCategory("You're Obesity");
    }
    const data = {bmi,bmiCategory};
    postData(data)
  };
  console.log(bmi);
  console.log(bmiCategory);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "30px"
        }}
      >
        <div
          style={{
            border: "1px solid teal",
            padding: "50px",
            borderRadius: "8px",
          }}
        >
          <Text color={"teal"} fontFamily={"cursive"} fontWeight={"bold"}>
            Calculate Your Body Mass Index
          </Text>
          <Container marginTop={"30px"} padding={"30px"} width={"100%"}>
            <form onSubmit={handleCalculateBmi}>
              <Input
                type="number"
                placeholder={"Enter your Height in m"}
                onChange={(e) => setHeight(e.target.value)}
              />{" "}
              <br />
              <br />
              <Input
                type="number"
                placeholder={"Enter your weight in Kgs"}
                onChange={(e) => setWeight(e.target.value)}
              />{" "}
              <br />
              <br />
              <Button
                colorScheme="teal"
                fontFamily={"cursive"}
                fontWeight={"bold"}
                width={"100%"}
                type="submit"
              >
                {isLoading?"Calculating":"Calculate BMI"}
              </Button>
            </form>
          </Container>
        </div>
        <div>
          <Text color={"teal"} fontFamily={"cursive"} fontWeight={"600"}>
            {bmi? `your latest calculated  Bmi is ${bmi} `: "It seems your current body index is not calculated !"} </Text>
            <Text color={"teal"} fontFamily={"cursive"} fontWeight={"600"}>{bmi?`and ${bmiCategory}`:""}</Text>
        </div>
      </div>
    </>
  );
};
