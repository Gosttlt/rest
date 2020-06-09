import React from 'react';
import s from './cost.module.css'
import { Field, reduxForm } from 'redux-form';
import QuestionItem from './QuestionItem';
import Question from './Question';
import { requireFormRadio } from '../utils/validators/validators';
const cityQuestValid =  requireFormRadio()

const Cost = ({ finalPrice, priceCalculation }) => {
    const CostReduxForm = reduxForm({ form: 'calculationPrive' })(CostForm);
    const onSubmit = (formData) => {
        
        priceCalculation(formData);

    }
    return (
        <div>
            <CostReduxForm onSubmit={onSubmit} finalPrice={finalPrice} />
        </div>

    )
}

const CostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Question question='Вы находитесь в Тольятти?' correctionQuest='(Подстепки и Приморский считаются как Тольятти)'>
                    <QuestionItem forLabel='answer_city_yes' responseText='Да' validate={[requireFormRadio]} fieldName='cityQuest' fieldValue='yes' fieldId='answer_city_yes' />
                    <QuestionItem forLabel='answer_city_no' responseText='Нет' fieldName='cityQuest' fieldValue='no' fieldId='answer_city_no' />
                </Question>
                <Question question='Была ли ванна ранее чем-то покрыта?'>
                    <QuestionItem forLabel='answer_cover_yes' responseText='Да' fieldName='coverQuest' fieldValue='yes' fieldId='answer_cover_yes' />
                    <QuestionItem forLabel='answer_cover_no' responseText='Нет' fieldName='coverQuest' fieldValue='no' fieldId='answer_cover_no' />
                </Question>
                <Question question='Какого размера  ванна?'>
                    <QuestionItem forLabel='bath75' responseText='75x75см' fieldName='sizeQuest' fieldValue='75' fieldId='bath75' />
                    <QuestionItem forLabel='bath150' responseText='150см' fieldName='sizeQuest' fieldValue='150' fieldId='bath150' />
                    <QuestionItem forLabel='bath170' responseText='170см' fieldName='sizeQuest' fieldValue='170' fieldId='bath170' />
                </Question>
                <div className={s.final_price}>
                    <button className={s.buttonFinalPrice}>Рассчитать</button>
        Итог: {props.finalPrice} Руб.
    </div>
            </div>
        </form>)
}




export default Cost;