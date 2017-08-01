import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const categoriesList = ({fetching})=>{
	return <InfiniteScroll
	pullDownToRefresh
  pullDownToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
  }
  //refreshFunction={this.refresh}
  next={fetching}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>Yay! You have seen it all</b>
    </p>
  }>
  {items}
	</InfiniteScroll>
}

export default categoriesList