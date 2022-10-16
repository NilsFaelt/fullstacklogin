import Styles from "styled-components";
import * as GlobalStyles from "../../styles/global.styles";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Colors } from "../../styles/colors";
import { Link } from "react-router-dom";
import { breakPoints } from "../../styles/breakPoints";

export const Container = Styles(GlobalStyles.flexedContainer)`
    width:100vw;
    height:10vh;
    background-color:${Colors.Dark};
    position:absolute;
    top:0vh;
    box-shadow: 0px 0px 10px black;
    justify-content:space-between;

`;
export const NavContainer = Styles(GlobalStyles.flexedContainer)`
    color:white;
    justify-content:space-around;
    gap:5vw;
  
`;
export const NavLink = Styles(Link)`
    text-decoration:none;
    color:white;
    @media (max-width: ${breakPoints.first}) {
        opacity:0;
        pointer-events:none;
      }
`;

export const Burger = Styles(Bars3Icon)`
    opacity:0;
    pointer-events:none;
    margin-left:10px;  
    color:white;
    width:calc(12px + 5vw);
    cursor:pointer;
    @media (max-width: ${breakPoints.first}) {
        opacity:1;
        pointer-events:all;
      }
    
`;
export const User = Styles(UserCircleIcon)`
    color:${Colors.Light};
    margin-right:10px;  
    color:white;
    width:calc(20px + 3vw);
    cursor:pointer;
    &:hover{
        transition:0.2s;
        width:calc(20px + 3vw);
        color:${Colors.Light};
        &:active{
            color:${Colors.active}
        }
       
    }

`;
