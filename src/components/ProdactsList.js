import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

class ProdactsList extends Component {

	fetchProdacts(){
		const { fetchingProdacts, setOffset, params, offset } = this.props
		fetch(`http://api.shopstyle.com/api/v2/products?pid=uid4961-26577031-68&fts=
			${params.cat}&offset=${offset}&limit=10`)
			.then(response => response.json())
			.then(resJson =>
				{	console.log(resJson.products);
					fetchingProdacts(resJson.products);
					setOffset()
				})
		}

	componentDidMount(){
		this.fetchProdacts()
	}

	render(){
		const { prodacts=[] } = this.props
		return <InfiniteScroll

			next={ ()=> this.fetchProdacts() }
		  hasMore={true}
		  loader={<h4>Loading...</h4>}>
	  {
			prodacts.length>0
			? prodacts.map( (item,i) => <img
				key={i}
				src={item.image.sizes.Medium.url}
				alt={i}
				width={item.image.sizes.Medium.width}
				height={item.image.sizes.Medium.height}/> )
			: false
		}
		</InfiniteScroll>
	}
}
export default ProdactsList