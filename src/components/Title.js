import styled from "styled-components";

const Title = styled.div`
  color: white;
  display: flex;
  margin: 5px 0px;
  font-size: ${props => props.size || "40px"};
  max-width :  ${props => props.max || ""}; 240px;
  text-align : center
`;

export default Title;
