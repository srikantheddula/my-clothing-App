
import styled from "styled-components"
export const BaseButton=styled.button`
min-width: 100px;
      width: auto;
      height: 50px;
      letter-spacing: 0.5px;
      line-height: 50px;
      /* padding: 0 35px 0 35px; */
      font-size: 12px;
      background-color: #fff;
      color: white;
      text-transform: uppercase;
      font-family: "Open Sans Condensed";
      font-weight: bolder;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      margin: 0px 10px 0px 0px;
  
    &:hover {
      background-color: white;
      color: black;
      border: none;
    }
`
export const GoogleSignInButton=styled(BaseButton)`
background-color: #0b4cb5ce;
      color: white;
  
      &:hover {
        background-color: #0b4cb5;
        border: none;
        border: 2px solid white;
        transition:border 0.1s ease-in-out

      }
`
export const InvertedSignInButton=styled(BaseButton)`
      background-color: #000000ce;
      color: #ffffff;
      border: 1px solid black;
        border: 1px solid white;
      &:hover {
        background-color: #000000;
        color: #ffffff;
        border: 2px solid white;
        transition:border 0.1s ease-in-out
      }
    }
`

// .button-container {
   
//       min-width: 100px;
//       width: auto;
//       height: 50px;
//       letter-spacing: 0.5px;
//       line-height: 50px;
//       /* padding: 0 35px 0 35px; */
//       font-size: 12px;
//       background-color: #fff;
//       color: white;
//       text-transform: uppercase;
//       font-family: "Open Sans Condensed";
//       font-weight: bolder;
//       border: none;
//       cursor: pointer;
//       display: flex;
//       justify-content: center;
//       margin: 0px 10px 0px 0px;
  
//     &:hover {
//       background-color: white;
//       color: black;
//       border: none;
//     }
  
//     &.google-sign-in {
//       background-color: #0b4cb5ce;
//       color: white;
  
//       &:hover {
//         background-color: #0b4cb5;
//         border: none;
//         border: 2px solid white;
//         transition:border 0.1s ease-in-out

//       }
//     }
  
//     &.inverted {
//       background-color: #000000ce;
//       color: #ffffff;
//       border: 1px solid black;
//         border: 1px solid white;

  
//       &:hover {
//         background-color: #000000;
//         color: #ffffff;
//         border: 2px solid white;
//         transition:border 0.1s ease-in-out
//       }
//     }
//   }
  