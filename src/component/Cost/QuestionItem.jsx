import React from 'react';
import s from './cost.module.css'
import { Field} from 'redux-form';


const QuestionItem = ({forLabel, responseText, fieldName,  fieldValue, fieldId}) => {
    return (
    <div className={s.answerItemBox}><label for={forLabel} className={s.answerLabel}>{responseText}
    </label><Field name={fieldName} component='input' type='radio' value={fieldValue} id={fieldId} /></div>             
)
}

export default QuestionItem;