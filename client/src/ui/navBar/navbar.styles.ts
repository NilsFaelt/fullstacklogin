import Styles from "styled-components";
import * as GlobalStyles from "../../styles/global.styles";

export const container = Styles.div`
width:100vw;
height:10vh;
background-color:white;
position:absolute;
top:0vh;
box-shadow:10px 0px 0px black;
`;
export const navContainer = Styles(GlobalStyles.flexedContainer)`
background-color:white;:red;
`;
