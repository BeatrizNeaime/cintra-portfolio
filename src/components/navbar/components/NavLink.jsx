import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavbarLink } from "./components";

const NavLink = ({ name, selectedPage, setSelectedPage, page }) => {
  const lower = page.toLowerCase();
  return (
    <AnchorLink
      style={{ textDecoration: "none" }}
      href={`#${lower}`}
      onClick={() => setSelectedPage(lower)}
    >
      <NavbarLink selected={page === selectedPage ? true : false}>
        {name}
      </NavbarLink>
    </AnchorLink>
  );
};

export default NavLink;
