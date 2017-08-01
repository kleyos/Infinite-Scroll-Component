export function offset(state=0, action){

	switch(action.type){
		case 'SET_OFFSET':
			return state+1
		default:
			return state
	}
}
