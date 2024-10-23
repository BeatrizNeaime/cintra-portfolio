import styled from "styled-components";
import { gradients } from "../../../constants/colors";

const ProfilePicture = styled.img`
  max-height: 500px;
  width: auto;

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }
`;

const LandingTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: -webkit-linear-gradient(#785a28, #a07b32, #785a28);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  padding: 0;
  font-family: "Beaufort for LOL", serif;
  text-shadow: 3px 2px 4cm rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  text-align: left;
  font-size: 80px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
    text-align: center;
  }
`;

const LandingSubtitle = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  margin: 0;
  padding: 0;
  width: 100%;
  margin: 0 5px;
`;

const Marker = styled.div`
  background: ${gradients.gold};
  height: 1px;
  width: 80%;
`;

export { ProfilePicture, LandingTitle, LandingSubtitle, Marker };
