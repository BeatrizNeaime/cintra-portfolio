import styled from "styled-components";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-evenly"};
  gap: ${(props) => props.gap || "0"};
`;

export { Column };
