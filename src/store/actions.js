import axios from '../axios-todo';

export const TASKS_REQUEST = 'TASKS_REQUEST';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const GET_TASKS_ERROR = 'GET_TASKS_ERROR';
export const ENTER_TASK = 'ENTER_TASK';


export const tasksRequest = () => {
	return {type: TASKS_REQUEST}
};
export const getTasksSuccess = tasks => {
	return {type: GET_TASKS_SUCCESS, tasks}
};
export const getTasksError = () => {
	return {type: GET_TASKS_ERROR}
};

export const getTasks = () => {
	return dispatch => {
		dispatch(tasksRequest());
		axios.get('todoApp.json').then(response => {
			dispatch(getTasksSuccess(response.data));
		}, error => {
			dispatch(getTasksError());
		});
	}
};

export const enterTask = task => {
	return {type: ENTER_TASK, task}
};

export const addTask = event => {
	event.preventDefault();
	return async (dispatch, getState) => {
		dispatch(tasksRequest());
		const task = {text: getState().currentTask};
		await axios.post('todoApp/todo.json', task);
		dispatch(getTasks());
	}
};

export const deleteTask = id => {
	return async dispatch => {
		await axios.delete(`todoApp/${id}.json`);
		dispatch(getTasks());
	}
};

export const moveToInProgress = id => {
	return async (dispatch, getState) => {
		const task = getState().todo[id];
		await axios.delete(`todoApp/todo/${id}.json`);
		await axios.post(`todoApp/inProgress.json`, task);
		dispatch(getTasks());
	}
};

export const moveToDone = id => {
	return async (dispatch, getState) => {
		const task = getState().inProgress[id];
		await axios.delete(`todoApp/inProgress/${id}.json`);
		await axios.post(`todoApp/done.json`, task);
		dispatch(getTasks());
	}
};