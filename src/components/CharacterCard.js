import React from "react";

import styled from 'styled-components';

const WrapperDiv = styled.div `

   width: 100%
   color: green
   height: 100%
   font-family: Fantasy

`;

const CharacterCard = props => {

 return (

  <WrapperDiv>
    <br></br>
    {props.id}
    <br></br>
    {props.status}
    <br></br>
    {props.name}
    <br></br>
    {props.species}
    <br></br>
    </WrapperDiv>
 )
}
export default CharacterCard;
