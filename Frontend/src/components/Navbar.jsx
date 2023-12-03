import { Container, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {

  const link = [
    { to: "/", title: "Home" },
    { to: "/bmi-calculation", title: "CalculateBmi" },
    { to: "/bmi-history", title: "YourBmi" },
  ];

  return (
    <Container display={"flex"} justifyContent={"space-around"} border={"1px solid teal"}  alignItems={"center"} maxW={"100%"} height={"70px"} fontFamily={"cursive"} fontWeight={"600"}> 
      <Container display={'flex'} justifyContent={"space-around"} >
      {link.map((el) => (
        <NavLink
          to={el.to}
          key={el.to}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "pink" : "teal",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          {el.title}
        </NavLink>
      ))}
      </Container>
      <Container display={'flex'} justifyContent={"space-around"} alignItems={"center"}  maxW={"200px"}>

      <NavLink
        to={"/profile"}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "teal" : "pink",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        signIn
       
      </NavLink>
      <NavLink
        to={"/profile"}
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "pink" : "teal",
            viewTransitionName: isTransitioning ? "slide" : "",
            border:"1px solid teal",
            padding:"8px",
            borderRadius:"5px",
            backgroundColor:"teal",
            color:"white",
            colorScheme:"teal"
          };
        }}
      >
        LoginIn
       
      </NavLink>
      </Container>
      
    </Container>
    
  );
};
