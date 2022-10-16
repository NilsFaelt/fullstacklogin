import * as Styles from "./navbar.styles";

const NavBar = () => {
  return (
    <Styles.Container>
      <Styles.Burger></Styles.Burger>
      <Styles.NavContainer>
        <Styles.NavLink to={"/"}>Home</Styles.NavLink>
        <Styles.NavLink to={"/login"}>Login</Styles.NavLink>
      </Styles.NavContainer>
      <Styles.User></Styles.User>
    </Styles.Container>
  );
};

export default NavBar;
