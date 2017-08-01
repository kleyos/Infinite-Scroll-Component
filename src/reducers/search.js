export function searchItem(state=[], action){

	switch(action.type){
		case 'SEARCH':
			return [...action.item]
		default:
			return state
	}
}

