import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: ${props => props.j_c || "center"};
  align-items: center;
  height: ${props => props.height || ""};
  background-color: ${props =>
    props.background_color ? props.background_color : "#252934"};
  flex-direction: column;
  font-family: "Arima Madurai", cursive;
`;

export default Wrapper;
