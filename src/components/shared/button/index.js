import React from 'react';

function Button(props) {
	const { text } = props;
	return <button>{text || 'TE'}</button>;
}

export default Button;
