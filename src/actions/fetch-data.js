export function fetching(data) {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_DATA',
			data
		})
	}
}
export function fetchingProdacts(data) {

	return (dispatch) => {
		dispatch({
			type: 'FETCH_PROD',
			data
		})
	}
}