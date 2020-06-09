const SET_PRICE = 'SET_PRICE';

const initialState = {
    finalPrice:0,
}

const calculationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRICE: 
        return { 
            ...state,
            finalPrice:action.price
        }

        default:
            return state;
    }
   
}

const setPriceSucces = (price) => ({type: SET_PRICE, price})

export const priceCalculation = (formData) => (dispatch) => {
    let totalPrice=0
    if(formData.coverQuest == "yes"){
        totalPrice +=500;
    }
    if(formData.sizeQuest == "75"){
        totalPrice +=2590;
    }
    if(formData.sizeQuest == "150"){
        totalPrice +=2790;
    }
    if(formData.sizeQuest == "170"){
        totalPrice +=2990;
    }
    if (formData.cityQuest == "no") {
        totalPrice += ' Руб. + выезд за каждые 10 км от города + 100'
    }
dispatch(setPriceSucces(totalPrice))  
}


export default calculationReducer