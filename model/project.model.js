const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	description: {
		type: String,
		trim: true,
	},
	card_image: {
		type: String,
	},
	body_image: {
		type: String,
	},
	url_git: {
		type: String,
	},
	url_netlify: {
		type: String,
	},
	date_created: {
		type: String,
	},
	date_post: {
		type: String,
	},
	technologys: [
		{
			type: String,
			trim: true,
		},
	],
});

module.exports = mongoose.model('Project', projectsSchema);
