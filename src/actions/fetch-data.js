export function fetching(data) {
	return (dispatch) => {
		dispatch({
			type: 'FETCH_DATA',
			data
		})
	}
}
