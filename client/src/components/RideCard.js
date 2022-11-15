import React from 'react';
import '../css/RideCard.css';
import DriverImage from '../images/profile-picture-mockup.jpg';

const RideCard = () => {
	return (
		<div className='ride-card'>
			<div className='photo'>
				<figure className='driver-picture'>
					<img src={DriverImage} alt='Driver name' />
				</figure>
			</div>
			<div className='driver-info'>
				<p className='text-important'>Mathew Pitts</p>

				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined'>star</span>
				</i>

				<p className='ride-details'>From: 700 Royal Street</p>
				<p className='ride-details'>To: 31254 Chalotte Avenue</p>
			</div>
			<div className='ride-info'>
				<p className='ride-details'>10/15/2022</p>
				<p className='ride-details'>9:45am</p>
				<br></br>
				<p className='text-important'>$58.42</p>
			</div>
		</div>
	);
};

export default RideCard;
