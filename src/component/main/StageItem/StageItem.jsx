import React from 'react';
import s from './StageItem.module.css'

const StageItem = ({textStage, imgStage}) => {
    return (
            <div className={s.stage}>
                <p className={s.textStage}> {textStage}</p>
                <img src={imgStage} alt="" className={s.imgStage}/>
            </div>
    )
}
export default StageItem;