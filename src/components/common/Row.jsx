import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  width: ${(props) => props.width || "100%"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "space-evenly"};
  gap: ${(props) => props.gap || "0"};
`;

const Row = ({ width, align, justify, children, gap }) => {
  return (
    <StyledRow width={width} align={align} justify={justify} gap={gap}>
      {children}
    </StyledRow>
  );
};

export default Row;
