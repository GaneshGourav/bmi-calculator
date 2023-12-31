import { Container, useDisclosure } from "@chakra-ui/react";
import { NavLink, json } from "react-router-dom";
import logo from "../Assests/logo.png";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const data = (localStorage.getItem("user"))||[];
  const isAuth = useSelector((store)=>store.signUpReducer.isAuth)
  
  console.log(data.email)
  const link = [
    { to: "/", title: "Home" },
    { to: "/bmi-calculation", title: "CalculateBmi" },
    { to: "/bmi-history", title: "YourBmi" },
  ];

  return (
    <Container
      display={"flex"}
      justifyContent={"space-around"}
      border={"1px solid teal"}
      alignItems={"center"}
      maxW={"100%"}
      height={"70px"}
      fontFamily={"cursive"}
      fontWeight={"600"}
    >
      <img src={logo} alt="" width={"90px"} />
      <Container display={"flex"} justifyContent={"space-around"}>
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
      <Container
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        maxW={"200px"}
      >
        <NavLink
          to={"/account-login"}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "pink" : "teal",
              viewTransitionName: isTransitioning ? "slide" : "",
              border: "1px solid teal",
              padding: "8px",
              borderRadius: "5px",
              backgroundColor: "teal",
              color: "white",
              colorScheme: "teal",
            };
          }}
        >
          {isAuth ?<CgProfile /> :"LoginIn"}
        </NavLink>
      </Container>
      <p>{data.email}</p>
      <p>hello</p>
    </Container>
  );
};
