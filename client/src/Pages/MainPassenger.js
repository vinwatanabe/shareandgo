import React from 'react';
import SearchBar from '../components/SearchBar';
import RideCard from '../components/RideCard';

const MainPassenger = () => {
	return (
		<>
			<SearchBar />

			<div>
				<h2 className='text-title mb-4'>Next scheduled rides</h2>

				<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>
					<div className='col'>
						<RideCard />
					</div>
					<div className='col'>
						<RideCard />
					</div>
					<div className='col'>
						<RideCard />
					</div>
					<div className='col'>
						<RideCard />
					</div>
					<div className='col'>
						<RideCard />
					</div>
					<div className='col'>
						<RideCard />
					</div>
					<div className='col'>
						<RideCard />
					</div>
					<div className='col'>
						<RideCard />
					</div>
				</div>
			</div>
		</>
	);
};

export default MainPassenger;
