import { Logo, NavbarContainer, NavbarNav } from "./components/components";
import logo from "../../assets/img/logo.png";
import NavLink from "./components/NavLink";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../../hooks/useMediaQuery";
import Language from "./components/Language";

const Navbar = ({ selectedPage, setSelectedPage, language, setLanguage }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <NavbarContainer>
      <AnchorLink
        href="#home"
        style={{ textDecoration: NamedNodeMap, color: "inherit" }}
      >
        <Logo src={logo} alt="logo" />
      </AnchorLink>
      {desktop && (
        <NavbarNav width={"50%"}>
          <NavLink
            page={"home"}
            name={language === "en" ? "home" : "Início"}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
          <NavLink
            page={"about"}
            name={language === "en" ? "about" : "Sobre"}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
          <NavLink
            page={"skills"}
            name={language === "en" ? "skills" : "Habilidades"}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
          <NavLink
            page={"projects"}
            name={language === "en" ? "projects" : "Projetos"}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
          <NavLink
            page={"contact"}
            name={language === "en" ? "contact" : "Contato"}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
          />
          <Language language={language} setLanguage={setLanguage} />
        </NavbarNav>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
