import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import ProdactsList from '../components/ProdactsList'

const mapStateToProps = state => ({
		offset:state.offset,
		prodacts: state.prodacts
	})
const mapDispachToProps = dispatch => bindActionCreators(actionCreators, dispatch)
const ProdactsContainer = connect(mapStateToProps, mapDispachToProps)(ProdactsList);

export default ProdactsContainer