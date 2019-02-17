import React from 'react';

const Button = props => {
	const buttonClasses = ['btn mr-1'];
	buttonClasses.push('btn-' + props.btnStyle);

	return (
		<button
			type={props.type}
			className={buttonClasses.join(' ')}
			onClick={props.clicked}
		>
			{props.label}
		</button>
	);
};

export default Button;