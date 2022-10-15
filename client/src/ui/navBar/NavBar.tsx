import { Link } from "react-router-dom";
import * as Styles from "./navbar.styles";

const NavBar = () => {
  return (
    <Styles.container>
      <Link to={"/"}>LOGIN</Link>
      <Styles.navContainer></Styles.navContainer>
    </Styles.container>
  );
};

export default NavBar;
