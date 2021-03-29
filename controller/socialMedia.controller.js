const SocialMedia = require('../model/socialMedia.model');

exports.newSocialMedia = async (req, res, next) => {
	const socialMedia = new SocialMedia(req.body);
	try {
		// socialMedia.admin = req.person._id;
		console.log(req);
		await socialMedia.save();
		res.json(socialMedia);
	} catch (error) {
		console.log(error);
		next();
	}
};

exports.getSocialMedias = async (req, res, next) => {
	try {
		const socialMedias = await SocialMedia.find({});
		res.json(socialMedias);
	} catch (error) {
		console.log(error);
		next();
	}
};

exports.updateSocialMedia = async (req, res, next) => {
	try {
		const socialMedia = await SocialMedia.findOneAndUpdate(
			{ _id: req.params.socialMediaId },
			req.body,
			{ new: true },
		);
		res.json(socialMedia);
	} catch (error) {
		console.log(error);
		next();
	}
};

exports.removeSocialMedia = async (req, res, next) => {
	try {
		await SocialMedia.findByIdAndRemove({
			_id: req.params.socialMediaId,
		});
		res.json({ mensaje: 'Red Social eliminada' });
	} catch (error) {
		console.log(error);
		next();
	}
};
