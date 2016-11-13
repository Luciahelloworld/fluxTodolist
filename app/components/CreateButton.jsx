import React, { PropTypes } from 'react';

const propTypes = {
	onClick:	PropTypes.func.isRequired
};

function CreateButton({onClick}){
	return (
		<div>
			<button onClick={() => {onClick();}} >添加</button>
		</div>
	)
}

CreateButton.propTypes = propTypes;

export default CreateButton;