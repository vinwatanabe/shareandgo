import React from 'react';
import ShareGoLogo from '../images/ShareGoLogo.png';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';

const Gateway = () => {
	return (
		<>
			<section className='col-md-4 position-absolute top-50 start-50 translate-middle'>
				<figure className='text-center'>
					<img
						src={ShareGoLogo}
						className='mb-3 img-fluid'
						alt='Share & Go Logo'
					/>
				</figure>
				<div className='row text-center'>
					<ButtonPrimary
						text='Register'
						className='col me-3'
						link='/registration'
						clickAction=''
					/>
					<ButtonSecondary
						text='Login'
						className='col'
						link='/login'
						clickAction=''
					/>
				</div>
			</section>
		</>
	);
};

export default Gateway;
