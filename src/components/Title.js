import styled from "styled-components";

const Title = styled.div`
  color: ${props => props.color || "white"};
  display: flex;
  margin: 5px 10px;
  font-size: ${props => props.size || "40px"};
  text-align: center;
  border-bottom: ${props => props.border_width || "0px"} solid black;
  
`;

export default Title;
