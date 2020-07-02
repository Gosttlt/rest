import React from 'react';
import s from './buttonGoUp.module.css';
import goUpImg from '../../../img/goUp.png'

export const GoUpButton = ({scroll}) => {
   const handleUpButton = () => {
      window.scrollTo(0, 0);
   }
   
   return (
      <button className={ scroll > 300 ? s.goUpButton + ' ' + s.showGoUp : s.goUpButton } onClick={handleUpButton}>
      <img src={goUpImg} />
       <br/>Go Up</button>
   )

}
export default GoUpButton;