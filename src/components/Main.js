import React, { Component } from 'react';
//import '../styles/Main.css';
import SearchInput from './search-input'

class Main extends Component {

	componentDidMount() {
		const { fetching, searching } = this.props
		fetch("http://api.shopstyle.com/api/v2/categories?pid=uid4961-26577031-68")
			.then(response => response.json())
			.then(resJson => {fetching(resJson.categories); searching(resJson.categories)})

	}
	render() {
		const { searchItem=[] } = this.props

		return (
      <div className="wrapper">
			<header>
				<SearchInput {...this.props}/>
			</header>
			 <ol>{
				 	searchItem.length>0
					? searchItem.map((item,i) => <li key={i}>{item.shortName}</li>)
					: false
			 }</ol>
      </div>
    );
  }
}

export default Main;
