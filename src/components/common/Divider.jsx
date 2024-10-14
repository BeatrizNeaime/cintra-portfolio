import styled from "styled-components";
import { gradients } from "../../constants/colors";
const DividerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const DividerComponent = styled.div`
  width: ${(props) => props.width || "80%"};
  height: 1px;
  background: ${gradients.gold};
`;

const Divider = ({ width }) => {
  return (
    <DividerContainer>
      <DividerComponent width={width} />
    </DividerContainer>
  );
};

export default Divider;
