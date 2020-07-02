import React from 'react';
import s from './FormControl.module.css';

export const RadioInputSpan = ({meta}) => {
   return  <>{meta.error && meta.submitFailed ? <span className={s.radioInputSpan + ' ' + s.error}>{meta.error}</span> : false}</>

}
export const RadioInput = ({input, meta, ...props}) => {
    return (
<div className={s.answerItemBox}><label for={props.for} className={s.answerLabel}>{props.responseText}
</label><input {...props} {...input}/></div>  )
}
