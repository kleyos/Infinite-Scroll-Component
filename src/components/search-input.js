import React, { Component } from 'react'

class SearchInput extends Component {

	handleSearch(){
	const { categories=[], searching } = this.props

	const value = this.searchInput.value
	const searchCategories = categories.filter(item => {
			if (!value) {
				return false
			}
			const regex = new RegExp(value, 'gi');
			return item.shortName.match(regex)
		})
	console.log('searchCategories', searchCategories)
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