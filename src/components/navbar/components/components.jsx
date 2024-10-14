import styled from "styled-components";
import { colors, gradients } from "../../../constants/colors";

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 15px 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  background: radial-gradient(
    circle,
    rgba(9, 20, 40, 1) 0%,
    rgba(10, 20, 40, 1) 100%
  );

  @media (max-width: 1024px) {
    padding: 15px 1rem;
    justify-content: center;
  }
`;

const Logo = styled.img`
  height: 31.8px;
  width: auto;
  cursor: pointer;

  @media (max-width: 1024px) {
    height: 25px;
    margin: 0;
  }
`;

const NavbarNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 5%;
`;

const NavbarLink = styled.p`
  color: ${colors.white};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-family: "Beaufort for LOL", serif;

  &::after {
    content: "";
    display: block;
    width: ${(props) => (props.selected ? "100%" : "0")};
    height: 3px;
    background: ${gradients.gold};
    transition: width 1s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export { NavbarContainer, Logo, NavbarLink, NavbarNav };
