import React, { Component } from 'react';
//import '../styles/Main.css';
import HeaderWithSearch from './header'

class Main extends Component {

	componentDidMount() {
		const { fetching } = this.props
		fetch("http://api.shopstyle.com/api/v2/categories?pid=uid4961-26577031-68")
			.then(response => response.json())
			.then(resJson => fetching(resJson.categories))

	}
	render() {
		const searchItems = this.props.searchItem
		const categories = this.props.categories
		//console.log('categeries', categories)
		return (
      <div className="wrapper">
			<header>
				<SearchInput {...this.props}/>
			</header>
			 <ul>{
				 	searchItems.length>0
					? searchItems.map((item,i) => <li key={i}>{item.shortName}</li>)
					: categories.map((item,i) => <li key={i}>{item.shortName}</li>)
			 }</ul>
      </div>
    );
  }
}

export default Main;
