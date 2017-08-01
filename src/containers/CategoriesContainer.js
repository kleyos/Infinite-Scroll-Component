import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import Categories from '../components/Categories'

const mapStateToProps = state => ({
		categories:state.categories,
		searchItem: state.searchItem
	})
const mapDispachToProps = dispatch => bindActionCreators(actionCreators, dispatch)
const CategoriesContainer = connect(mapStateToProps, mapDispachToProps)(Categories);

export default CategoriesContainer