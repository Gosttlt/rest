import { connect } from 'react-redux';
import Cost from './Cost';
import { priceCalculation } from '../../redux/calculationReducer';




const mapStateToProps = (state) => {
    return {
        finalPrice:state.calculation.finalPrice,
    }
}


export default connect(mapStateToProps, {priceCalculation})(Cost);