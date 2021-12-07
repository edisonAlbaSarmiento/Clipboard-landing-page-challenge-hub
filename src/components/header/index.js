import React from 'react';
import { Button } from '../shared';

function Header() {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				width: '100%',
				backgroundRepeat: 'no-repeat',
				backgroundImage:
					'url(' +
					'https://raw.githubusercontent.com/edisonAlbaSarmiento/Clipboard-landing-page-challenge-hub/main/src/assets/bg-header-desktop.png' +
					')',
			}}>
			<img src='https://raw.githubusercontent.com/edisonAlbaSarmiento/Clipboard-landing-page-challenge-hub/main/src/assets/logo.svg' />
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
