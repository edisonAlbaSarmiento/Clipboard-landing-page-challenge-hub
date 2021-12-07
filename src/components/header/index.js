import React from 'react';
import { Button } from '../shared';
const HeadImage = require('../../assets/bg-header-desktop.png');

function Header() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				width: '100%',
				height: 200,
				backgroundImage:
					'url(' +
					'https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350' +
					')',
			}}>
			<h1>A history of enerything you copy</h1>
			<div
				style={{
					width: '10%',

					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					flexDirection: 'row',
				}}>
				<Button />
				<Button />
			</div>
		</div>
	);
}

export default Header;
