export function categories(state=[], action){
	switch(action.type){
		case 'FETCH_DATA':
			return [...action.data]
		default:
			return state
	}
}

export function prodacts(state=[], action){
	switch(action.type){
		case 'FETCH_PROD':
			return [...state, ...action.data]
		default:
			return state
	}
}