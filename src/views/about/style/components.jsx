import styled from "styled-components";
import { colors } from "../../../constants/colors";

const AboutImage = styled.img`
  height: 40%;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid ${colors.yellow.details};
  padding: 5px;
`;

export { AboutImage };
