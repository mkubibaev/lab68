import {TASKS_REQUEST, GET_TASKS_SUCCESS, ENTER_TASK, GET_TASKS_ERROR} from "./actions";

const initialState = {
	todo: {},
	inProgress: {},
	done: {},
	currentTask: '',
	loading: true
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TASKS_REQUEST:
			return {
				...state,
				loading: true
			};
		case GET_TASKS_SUCCESS:
			return {
				...initialState,
				...action.tasks,
				loading: false
			};
		case GET_TASKS_ERROR:
			return {
				...initialState,
				error: action.error,
				loading: false
			};
		case ENTER_TASK:
			return {
				...state,
				currentTask: action.task
			};
		default: {
			return state;
		}
	}

};

export default reducer;