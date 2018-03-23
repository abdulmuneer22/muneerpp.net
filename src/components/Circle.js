import styled from "styled-components";

const Circle = styled.div`
  background-color: #04C2C9;
  border: 1px solid #04C2C9;
  width: 140px;
  height: 140px;
  border-radius: ${140/2}px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  color: white;
  font-size : 18px;
  :hover {
    background-color : grey;
  border: 1px solid grey;
    
  }
`;

export default Circle;
