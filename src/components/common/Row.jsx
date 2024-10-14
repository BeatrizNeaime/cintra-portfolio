import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  width: ${(props) => props.width || "100%"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-evenly"};
`;

const Row = ({ width, align, justify, children }) => {
  return (
    <StyledRow width={width} align={align} justify={justify}>
      {children}
    </StyledRow>
  );
};

export default Row;
