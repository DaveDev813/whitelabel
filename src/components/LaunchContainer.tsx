import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftDiv = styled.img`
  width: 50vw;
  height: 100vh;
`;

const RightDiv = styled.div`
  width: 50vw;
  height: 100vh;
`;

const LaunchContainer: React.FC = (props: any) => {
  return (
    <Container>
      <LeftDiv src={require("../assets/images/launchBG.png")} />
      <RightDiv>{props.children}</RightDiv>
    </Container>
  );
};

export default LaunchContainer;
