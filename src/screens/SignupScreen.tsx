import React from "react";
import styled from "styled-components";
import SignInScreen from "./SignInScreen";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftDiv = styled.img`
  background-color: red;
  width: 50vw;
  height: 100vh;
`;

const RightDiv = styled.div`
  /* background-color: pink; */
  width: 50vw;
  height: 100vh;
`;

const SignupScreen: React.FC = () => {
  return (
    <Container>
      <LeftDiv src={require("../assets/images/launchBG.png")} />
      <RightDiv>
        <SignInScreen />
      </RightDiv>
    </Container>
  );
};

export default SignupScreen;
