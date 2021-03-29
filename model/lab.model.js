const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const labSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	ss_image: {
		type: String,
		trim: true,
	},
	date_post: String,
	operating_system: {
		type: String,
		trim: true,
	},
	url_wallpaper: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model('Lab', labSchema);
