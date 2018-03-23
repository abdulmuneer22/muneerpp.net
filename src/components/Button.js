import styled from "styled-components";

const Button = styled.div`
  background: ${props => props.background || "transparent"};
  border: 1px solid ${props => props.border || "white"};
  padding: 10px 25px;
  margin: 20px 10px;
  color: ${props => props.color || "white"};
  max-width: 150px;
  display: flex;
  justify-content: center;
`;

export default Button;
