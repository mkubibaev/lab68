import React, {Component} from 'react';
import AddForm from "../../components/AddForm/AddForm";
import Card from "../../components/UI/Card/Card";
import Task from "../../components/Task/Task";
import {connect} from "react-redux";
import {addTask, deleteTask, enterTask, getTasks, moveToDone, moveToInProgress} from "../../store/actions";
import Loader from "../../components/UI/Loader/Loader";

class Todo extends Component {

	componentDidMount() {
		this.props.getTasks();
	}

	render() {

		let todoList = (
			<div className="row">
				<div className="col-12 col-md-6 col-lg-4">
					<Card title="ToDo" bg="secondary">
						{this.props.todo.map(task => (
							<Task
								key={task.id}
								text={task.text}
								buttons={
									[{
										type: 'button',
										btnStyle: 'outline-danger btn-sm w-50',
										label: 'Delete',
										clicked: () => {this.props.deleteTask('todo/' + task.id)}
									},{
										type: 'button',
										btnStyle: 'secondary btn-sm w-50',
										label: 'in Progress >',
										clicked: () => {this.props.moveToInProgress(task.id)}
									}]
								}
							/>
						))}
					</Card>
				</div>

				<div className="col-12 col-md-6 col-lg-4">
					<Card title="in Progress" bg="info">
						{this.props.inProgress.map(task => (
							<Task
								key={task.id}
								text={task.text}
								buttons={
									[{
										type: 'button',
										btnStyle: 'outline-danger btn-sm w-50',
										label: 'Delete',
										clicked: () => {this.props.deleteTask('inProgress/' + task.id)}
									},{
										type: 'button',
										btnStyle: 'info btn-sm w-50',
										label: 'Done >',
										clicked: () => {this.props.moveToDone(task.id)}
									}]
								}
							/>
						))}
					</Card>
				</div>

				<div className="col-12 col-md-6 col-lg-4">
					<Card title="Done" bg="success">
						{this.props.done.map(task => (
							<Task
								key={task.id}
								text={task.text}
								buttons={
									[{
										type: 'button',
										btnStyle: 'outline-danger btn-sm w-50',
										label: 'Delete',
										clicked: () => {this.props.deleteTask('done/' + task.id)}
									}]
								}
							/>
						))}
					</Card>
				</div>
			</div>
		);

		return (
			<div className="container py-3">
				<h1 className="text-center mb-3">To Do list</h1>

				<AddForm
					value={this.props.currentTask}
					changed={this.props.enterTask}
					submitted={this.props.addTask}
				/>

				{this.props.loading ? <Loader/> : todoList}

			</div>
		);
	}
}


const convertToArr = obj => {
	return Object.keys(obj).map(id => (
		{
			...obj[id],
			id: id
		}
	));
};

const mapStateToProps = state => {
	return {
		todo: convertToArr(state.todo),
		inProgress: convertToArr(state.inProgress),
		done: convertToArr(state.done),
		currentTask: state.currentTask,
		loading: state.loading
	}
};

const mapDispatchToProps = dispatch => {
	return {
		getTasks: () => dispatch(getTasks()),
		enterTask: (event) => dispatch(enterTask(event.target.value)),
		addTask: (event) => dispatch(addTask(event)),
		deleteTask: (id) => dispatch(deleteTask(id)),
		moveToInProgress: (id) => dispatch(moveToInProgress(id)),
		moveToDone: (id) => dispatch(moveToDone(id))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);