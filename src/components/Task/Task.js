import React from 'react';
import Button from "../UI/Button/Button";

const Task = props => {
	return (
		<div className="card p-2 mb-2">
			<p>{props.text}</p>
			<div className="d-flex justify-content-around">
				{props.buttons.map((button, index) => (
					<Button
						key={index}
						label={button.label}
						btnStyle={button.btnStyle}
						type={button.type}
					/>
				))}
				{/*<input type="button"*/}
					   {/*className="delete btn btn-sm btn-outline-danger w-50 mr-1"*/}
					   {/*value="Delete"/>*/}
				{/*<input type="button"*/}
					   {/*className="move btn btn-sm btn-secondary w-50"*/}
					   {/*value="In Progress >"/>*/}
			</div>
		</div>
	);
};

export default Task;