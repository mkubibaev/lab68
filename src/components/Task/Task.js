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
						clicked={button.clicked}
					/>
				))}
			</div>
		</div>
	);
};

export default Task;