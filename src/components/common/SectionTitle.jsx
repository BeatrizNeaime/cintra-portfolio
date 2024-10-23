import styled from "styled-components";
import Row from "./Row";
import { colors } from "../../constants/colors";

const StyledTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  font-family: "Beaufort for LOL", serif;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  width: max-content;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const TitleMarker = styled.div`
  max-width: 100%;
  min-width: 40%;
  border: 1px solid ${colors.yellow.details};

  @media screen and (max-width: 768px) {
    min-width: 30%;
  }
`;

const SectionTitle = ({ title }) => {
  return (
    <Row width={"100%"} gap={"8px"} align={"center"} justify={"center"}>
      <TitleMarker />
      <StyledTitle>{title}</StyledTitle>
      <TitleMarker />
    </Row>
  );
};

export default SectionTitle;
