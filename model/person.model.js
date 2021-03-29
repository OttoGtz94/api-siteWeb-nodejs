const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
	name: {
		type: String,
		trim: true,
	},
	profession: {
		type: String,
		trim: true,
	},
	about_me: {
		type: String,
		trim: true,
	},
	avatar: {
		type: String,
		trim: true,
	},
	// social_media: {
	// 	type: [
	// 		{
	// 			name: {
	// 				type: String,
	// 				trim: true,
	// 			},
	// 			url: {
	// 				type: String,
	// 				trim: true,
	// 			},
	// 			icon: {
	// 				type: String,
	// 				trim: true,
	// 			},
	// 		},
	// 	],
	// },
	// social_media: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'SocialMedia',
	// },
});

module.exports = mongoose.model('Person', personSchema);
