import styled from 'styled-components'
import {BaseButton,GoogleSignInButton,InvertedSignInButton} from '../components/button/button.styles'

export const CartDropdownContainer=styled.div`
position: absolute;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},${GoogleSignInButton},${InvertedSignInButton}{
      margin-top: auto;

    }
`
export const EmptyMessage=styled.span`
font-size: 18px;
    margin: 50px auto;

`

export const CartItems=styled.div `
height: 400px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      margin:0px;
      padding: 0px;
`
// .cart-dropdown-container {
//     position: absolute;
//     width: 300px;
//     height: 400px;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background-color: white;
//     top: 90px;
//     right: 40px;
//     z-index: 5;
  
//     .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }
  
//     .cart-items {
//       height: 400px;
//       display: flex;
//       flex-direction: column;
//       overflow: scroll;
//       margin:0px;
//       padding: 0px;
//     }
  
//     button {
//       margin-top: auto;
//     }
//   }
  