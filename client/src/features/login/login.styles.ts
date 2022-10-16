import Styles from "styled-components";
import { Colors } from "../../styles/colors";
import * as GlobalStyles from "../../styles/global.styles";

export const container = Styles(GlobalStyles.flexedContainer)`
margin: 0 auto;
margin-top:20vh;
width:80vw;
background-color:${Colors.Light};
border-radius:5px;
color:${Colors.Dark};
`;

export const title = Styles(GlobalStyles.secondaryTitle)`

`;
