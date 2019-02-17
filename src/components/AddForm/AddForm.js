import React from 'react';
import Button from "../UI/Button/Button";

const AddForm = props => {
	return (
		<form>
			<div className="row mb-5">
				<div className="col-12 col-sm-10 mb-2">
					<input type="text" className="form-control"/>
				</div>
				<div className="col-12 col-sm-2">
					<Button
						type="submit"
						btnStyle="primary w-100"
						label="Add"
					/>
					{/*<button className="primary" type="submit">Add</button>*/}
				</div>
			</div>
		</form>
	);
};

export default AddForm;