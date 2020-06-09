import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import s from './main.module.css'
import removal from '../../img/1.jpg';
import degreasing from '../../img/2.jpg';
import drying from '../../img/3.jpg';
import sanding from '../../img/4.jpg';
import casting from '../../img/5.jpg';
import completed from '../../img/6.jpg';
import result from '../../img/7.jpg';
import beforeAfter from '../../img/8.jpg';




const Main = (props) => {
console.log('render');

    return (
        <div className={s.main}>
            <h1>Реставрация ванны акрилом</h1>
            <p className={s.anchorBox}>
          <Link to="yak1"className={s.anchor} smooth={true} duration= {500}>- Почему именно реставрация?</Link>
          <Link to="yak2" className={s.anchor} smooth={true} duration= {500}>- Как проходит процесс реставрации?</Link>
          <Link to="yak3" className={s.anchor} smooth={true} duration= {500}>- Фото ванны до и после реставрации</Link>
            </p>
            <img className={s.resultImg} src={result} alt=""/>
            <h2 id="yak1">Почему именно реставрация ванны?</h2>
            <p className={s.content}>
                Реставрация ванны - это отличный, современный и востребованный способ сэкономить средства и получить новую ванну. 
                "Лучше уж новая ванна" — скажут многие. Да, новая ванна это хорошо, но что влечет за собой установка новой ванны? 
                Это демонтаж старой, вынос, ремонт ванной комнаты, установка новой ванны. В итоге набегает от 7000 руб.
                Поэтому реставрация ванны — это хорошая альтернатива.
            </p>
            <h2 id="yak2">Как проходит процесс реставрации?</h2>
            <div className={s.stage}>
                <p className={s.textStage}> Если ванна уже покрывалась акрилом, то для начала мастер снимает старый слой материала</p>
                <img src={removal} alt="" className={s.imgStage}/>
            </div>
            <div className={s.stage}>
                <p className={s.textStage}> Далее, мастер обезжиривает и промывает поверхность</p>
                <img src={degreasing} alt="" className={s.imgStage}/>
            </div>
            <div className={s.stage}>
                <p className={s.textStage}> После, мастер высушивает ванну страительным феном</p>
                <img src={drying} alt="" className={s.imgStage}/>
            </div>
            <div className={s.stage}>
                <p className={s.textStage}> Когда ванна высохла, поверхность зачищается наждачкой, для лучшего сцепления материала с поверхностью</p>
                <img src={sanding} alt="" className={s.imgStage}/>
            </div>
            <div className={s.stage}>
                <p className={s.textStage}> Когда ванна готова к покрытию, мастер замешивает материал и методом налива начинает покрывать ванну, c верхних углов, постепенно двигаясь к центру</p>
                <img src={casting} alt="" className={s.imgStage}/>
            </div>
            <div className={s.stage}>
                <p className={s.textStage}> Ванна готова. Через 24 часа можно пользоваться! </p>
                <img src={completed} alt="" className={s.imgStage}/>
            </div>
            <h2 id="yak3">Фото ванны до и после реставрации</h2>
            <img src={beforeAfter} className={s.beforeAfter} alt=""/>

            
        </div>
    )
}
export default Main;