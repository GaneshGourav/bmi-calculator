import { Button, Container, Input, Text } from "@chakra-ui/react";

export const Login = () => {
  return (
    <>
      <Container
        border={"1px solid teal"}
        padding={"30px"}
        borderRadius={"8px"}
        marginTop={"5%"}
      >
        <Text
          color={"teal"}
          fontWeight={"bold"}
          fontFamily={"cursive"}
          marginTop={"30px"}
          marginBottom={"30px"}
        >
          Login here !
        </Text>
        <form>
          <Input
            type="email"
            placeholder="Enter your Email"
            border={"1px solid teal"}
            autoCorrect="on"
            spellCheck
            autoFocus
          />
          <br />
          <br />
          <Input
            type="password"
            placeholder="Enter your Password"
            border={"1px solid teal"}
            autoCorrect="on"
            spellCheck
          />
          <br /> <br /> <br />
          <Button colorScheme="teal" width={"100%"} type="submit">
            Login
          </Button>
          <br />
          <br />
        </form>
        <Text>
          If you are new then{" "}
          <span
            style={{ color: "teal", fontWeight: "bold", fontFamily: "cursive" }}
          >
            <a href="/account-signin">SignUp here</a>
          </span>{" "}
        </Text>
      </Container>
    </>
  );
};
