const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialMediaSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	url: {
		type: String,
		trim: true,
	},
	icono: {
		type: String,
		trim: true,
	},
});
module.exports = mongoose.model(
	'SocialMedia',
	socialMediaSchema,
);
