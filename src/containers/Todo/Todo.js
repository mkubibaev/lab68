import React, {Component} from 'react';
import AddForm from "../../components/AddForm/AddForm";
import Card from "../../components/UI/Card/Card";
import Task from "../../components/Task/Task";

class Todo extends Component {

	state = {
		todo: [
			{id: 1, text: 'task 1'}
		],
		inProgress: [
			{id: 2, text: 'task 2'}
		],
		done: [
			{id: 3, text: 'task 3'}
		]
	};

	render() {
		return (
			<div className="container py-3">
				<h1 className="text-center mb-3">To Do list</h1>
				<AddForm/>
				<div className="row">

					<div className="col-12 col-md-6 col-lg-4">
						<Card title="ToDo" bg="secondary">
							{this.state.todo.map(task => (
								<Task
									key={task.id}
									text={task.text}
									buttons={
										[
											{type: 'button', btnStyle: 'outline-danger btn-sm w-50', label: 'Delete'},
											{type: 'button', btnStyle: 'secondary btn-sm w-50', label: 'in Progress >'}
										]
									}
								/>
							))}
						</Card>
					</div>

					<div className="col-12 col-md-6 col-lg-4">
						<Card title="in Progress" bg="info">
							{this.state.inProgress.map(task => (
								<Task
									key={task.id}
									text={task.text}
									buttons={
										[
											{type: 'button', btnStyle: 'outline-danger btn-sm w-50', label: 'Delete'},
											{type: 'button', btnStyle: 'info btn-sm w-50', label: 'Done >'}
										]
									}
								/>
							))}
						</Card>
					</div>

					<div className="col-12 col-md-6 col-lg-4">
						<Card title="Done" bg="success">
							{this.state.done.map(task => (
								<Task
									key={task.id}
									text={task.text}
									buttons={
										[
											{type: 'button', btnStyle: 'outline-danger btn-sm w-50', label: 'Delete'}
										]
									}
								/>
							))}
						</Card>
					</div>
				</div>
			</div>
		);
	}
}

export default Todo;