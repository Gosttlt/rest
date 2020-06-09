import React from 'react';
import s from './cost.module.css'



const Question = ({ question, correctionQuest = null, children }) => {
    return (
        <div>
            <p className={s.question}>{question}</p>
            <div className={s.answerBox}>
            Выберете ответ:<br /><br />
            {children}
                <p>{correctionQuest}</p>
            </div>
        </div>
    )
}



export default Question;