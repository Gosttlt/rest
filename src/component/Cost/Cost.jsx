import React from 'react';
import s from './cost.module.css'
import { Field, reduxForm } from 'redux-form';
import Question from './Question';
import { RadioInput, RadioInputSpan } from '../common/FormControl/FormControl';
import { requireFormRadio } from '../utils/validators/validators';
import { useState } from 'react';

const Cost = () => {
    const CostReduxForm = reduxForm({ form: 'calculationPrive' })(CostForm);
    const [finalPrice, setFinalPrice] = useState(0);
    const onSubmit = ({ coverQuest, sizeQuest, cityQuest }) => {
        let totalPrice = 0
        if (coverQuest == "yes") {
            totalPrice += 500;
        }
        if (sizeQuest == "75") {
            totalPrice += 2590;
        }
        if (sizeQuest == "150") {
            totalPrice += 2790;
        }
        if (sizeQuest == "170") {
            totalPrice += 2990;
        }
        if (cityQuest == "no") {
            totalPrice += ' Руб. + выезд за каждые 10 км от города + 100'
        }
        setFinalPrice(totalPrice);


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
                    <Field component={RadioInput} name='cityQuest' type='radio' value='yes' responseText='Да' for="answer_city_yes" id="answer_city_yes" />
                    <Field component={RadioInput} name='cityQuest' type='radio' value='no' responseText='Нет' for="answer_city_no" id="answer_city_no" />
                    <Field component={RadioInputSpan} name='cityQuest' validate={[requireFormRadio]} />
                </Question>
                <Question question='Была ли ванна ранее чем-то покрыта'>
                    <Field component={RadioInput} name='coverQuest' type='radio' value='yes' responseText='Да' for="answer_cover_yes" id="answer_cover_yes" />
                    <Field component={RadioInput} name='coverQuest' type='radio' value='no' responseText='Нет' for="answer_cover_no" id="answer_cover_no" />
                    <Field component={RadioInputSpan} name='coverQuest' validate={[requireFormRadio]} />
                </Question>
                <Question question='Была ли ванна ранее чем-то покрыта'>
                    <Field component={RadioInput} name='sizeQuest' type='radio' value='75' responseText='75x75см' for="bath75" id="bath75" />
                    <Field component={RadioInput} name='sizeQuest' type='radio' value='150' responseText='150см' for="bath150" id="bath150" />
                    <Field component={RadioInput} name='sizeQuest' type='radio' value='170' responseText='170см' for="bath170" id="bath170" />
                    <Field component={RadioInputSpan} name='sizeQuest' validate={[requireFormRadio]} />
                </Question>
                <div className={s.final_price}>
                    <button className={s.buttonFinalPrice}>Рассчитать</button>
        Итог: {props.finalPrice} Руб.

    </div>
            </div>
        </form>)
}




export default Cost;