const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologySchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	icon: {
		type: String,
		trim: true,
	},
	level: Number,
	category: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model('Technology', technologySchema);
