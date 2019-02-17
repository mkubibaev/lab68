import React from 'react';

const Card = props => {
	const cardClasses = ['card-header text-white text-center'];
	cardClasses.push('bg-' + props.bg);

	return (

		<div className="card bg-light mb-4 ">
			<div className={cardClasses.join(' ')}>
				{props.title}
			</div>
			<div className="card-body">
				{props.children}
			</div>
		</div>

	);
};

export default Card;