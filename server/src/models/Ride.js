const mongoose = require('mongoose');

const PassengerSchema = new mongoose.Schema({
	user: {
		ref: 'User',
		type: mongoose.Schema.Types.ObjectId,
	},
	passenger_status: {
        type: String,
        require: true,
    },
	payment: {
        type: String,
        require: false,
    },
	amount: {
        type: Double,
        require: false,
    },
	driver_status: {
        type: String,
        require: false,
    },
	payment_status: {
        type: String,
        require: false,
    },
},
{ timestamps: true }
);

const SeatRequestSchema = new mongoose.Schema({
	user: {
		ref: 'User',
		type: mongoose.Schema.Types.ObjectId,
	},
	message: {
        type: String,
        require: false,
    },
	date: {
        type: Date,
        require: false,
    },
	status: {
        type: String,
        require: false,
    },
},
{ timestamps: true }
);

const RideSchema = new mongoose.Schema({
	origin: {
        type: String,
        require: true,
    },
	destination: {
        type: String,
        require: true,
    },
	waypoint: {
        type: String,
        require: false,
    },
	direction: {
        type: String,
        require: true,
    },
	frequency: {
        type: String,
        require: true,
    },
	departure_date: {
        type: Date,
        require: true,
    },
	returning_date: {
        type: Date,
        require: false,
    },
	seats: {
        type: Integer,
        require: true,
    },
	description: {
        type: String,
        require: false,
    },
	price: {
        type: Double,
        require: true,
    },
	status: {
        type: String,
        require: true,
    },
	user: {
		ref: 'User',
		type: mongoose.Schema.Types.ObjectId,
	},
	car: {
		ref: 'Car',
		type: mongoose.Schema.Types.ObjectId,
	},
	passenger: [PassengerSchema],
	seat_request: [SeatRequestSchema],
},
{ timestamps: true }
);

module.exports = mongoose.model("Ride", RideSchema);
