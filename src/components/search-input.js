import React, { Component } from 'react'

class SearchInput extends Component {

	handleSearch(){
	const value = this.searchInput.value
	console.log('value', value)
	const categories = this.props.data
	const searching = this.props.searching

	const searchCategories = categories
	? categories.filter(item => {
			if (!value) {
				return true
			}
			const regex = new RegExp(value, 'gi');
			return item.shortName.match(regex)
		})
	: false

	searching(searchCategories)
	}

	render(){
		return <input className="filter-input" type="text"
			ref={input => this.searchInput=input}
			onChange={() => this.handleSearch()}
    	placeholder='What are you looking for?' />
	}
}

export default SearchInput