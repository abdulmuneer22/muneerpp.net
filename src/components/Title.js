import styled from "styled-components";

const Title = styled.div`
  color: ${props => props.color || "white"};
  display: flex;
  margin: 5px 0px;
  font-size: ${props => props.size || "40px"};
  text-align : center
`;

export default Title;
