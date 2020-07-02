import React, { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import s from './main.module.css'
import removal from '../../img/1.jpg';
import degreasing from '../../img/2.jpg';
import drying from '../../img/3.jpg';
import sanding from '../../img/4.jpg';
import casting from '../../img/5.jpg';
import completed from '../../img/6.jpg';
import beforeAfter from '../../img/8.jpg';
import GoUpButton from '../common/ButtonGoUp/ButtonGoUp'
import StageItem from './StageItem/StageItem';


const Main = (props) => {
  const [scroll, setScroll] = useState(0);
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={s.main}>
      <GoUpButton scroll={scroll} />
      <h1>Реставрация ванны акрилом</h1>
      <div className={s.anchorBox}>
        <div className={s.anchors}>
          <div className={s.anchorsBg}>
            <Link to="yak1" className={s.anchor} smooth={true} duration={500}> Почему именно реставрация?</Link>
            <Link to="yak2" className={s.anchor} smooth={true} duration={500}> Как проходит процесс реставрации?</Link>
            <Link to="yak3" className={s.anchor} smooth={true} duration={500}> Фото ванны до и после реставрации</Link>
          </div>
        </div>
      </div>
      <h2 id="yak1">Почему именно реставрация ванны?</h2>
      <p className={s.content}>
        Реставрация ванны - это отличный, современный и востребованный способ сэкономить средства и получить новую ванну.
        "Лучше уж новая ванна" — скажут многие. Да, новая ванна это хорошо, но что влечет за собой установка новой ванны?
        Это демонтаж старой, вынос, ремонт ванной комнаты, установка новой ванны. В итоге набегает от 7000 руб.
        Поэтому реставрация ванны — это хорошая альтернатива.
            </p>
      <h2 id="yak2">Как проходит процесс реставрации?</h2>
      <StageItem imgStage={removal} textStage=' Если ванна уже покрывалась акрилом, то для начала мастер снимает старый слой материала' />
      <StageItem imgStage={degreasing} textStage=' Далее, мастер обезжиривает и промывает поверхность' />
      <StageItem imgStage={drying} textStage=' После, мастер высушивает ванну страительным феном' />
      <StageItem imgStage={sanding} textStage=' Когда ванна высохла, поверхность зачищается наждачкой, для лучшего сцепления материала с поверхностью' />
      <StageItem imgStage={casting} textStage=' Когда ванна готова к покрытию, мастер замешивает материал и методом налива начинает покрывать ванну, c верхних углов, постепенно двигаясь к центру' />
      <StageItem imgStage={completed} textStage=' Ванна готова. Через 24 часа можно пользоваться!' />
      <h2 id="yak3">Фото ванны до и после реставрации</h2>
      <img src={beforeAfter} className={s.beforeAfter} alt="" />
    </div>
  )
}
export default Main;