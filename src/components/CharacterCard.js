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
    {props.id}
    {props.status}
    {props.name}
    {props.species}
    </WrapperDiv>
 )
}
export default CharacterCard;
