import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Gateway from './Pages/Gateway';
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import MainPassenger from './Pages/MainPassenger';
import DestinationPassenger from './Pages/DestinationPassenger';
import DriversAvailable from './Pages/DriversAvailable';
import RideInfo from './Pages/RideInfo';
import RideStatus from './Pages/RideStatus';
import RideCompleteReview from './Pages/RideCompleteReview';
import UserAccountPage from './Pages/UserAccountPage';
import Messages from './Pages/Messages';
import MessageContent from './Pages/MessageContent';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Routes>
						<Route path='/' element={<Gateway />} />
						<Route path='/registration' element={<Registration />} />
						<Route path='/login' element={<Login />} />
						<Route path='/main-passenger' element={<MainPassenger />} />
						<Route
							path='/passenger-destination'
							element={<DestinationPassenger />}
						/>
						<Route path='/drivers-available' element={<DriversAvailable />} />
						<Route path='/ride-info' element={<RideInfo />} />
						<Route path='/ride-status' element={<RideStatus />} />
						<Route path='/ride-complete' element={<RideCompleteReview />} />
						<Route path='/user-account' element={<UserAccountPage />} />
						<Route path='/messages' element={<Messages />} />
						<Route path='/message-content' element={<MessageContent />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
