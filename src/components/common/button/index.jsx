import styled from "styled-components";
import { colors, gradients } from "../../../constants/colors";

const Button = styled.button`
  background-color: ${colors.blue};
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: ${(props) => props.rounded || "12px"};
  height: ${(props) => (props ? props.height : "54px")};
  width: ${(props) => (props ? props.width : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${gradients.blue};
    transition: 0.5s all ease-in-out;
    cursor: pointer;
  }
`;

const SocialMediaButton = styled.a`
  background-color: ${colors.blue};
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 20px;
  border-radius: ${(props) => props.rounded || "12px"};
  height: ${(props) => (props ? props.height : "54px")};
  width: ${(props) => (props ? props.width : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 2rem 0;

  &:hover {
    background: ${gradients.blue};
    transition: 0.5s all ease-in-out;
    cursor: pointer;
  }
`;

export { SocialMediaButton };
export default Button;
