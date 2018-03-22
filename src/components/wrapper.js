import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || '600px'};
  background-color: ${props =>
    props.background_color ? props.background_color : "#252934"};
  flex-direction: column;
  font-family: "Arima Madurai", cursive;
`;

export default Wrapper;
