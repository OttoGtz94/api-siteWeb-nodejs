const Technology = require('../model/technologys.model');

// crear tecnologia
exports.newTechnology = async (req, res, next) => {
	const technology = new Technology(req.body);
	try {
		await technology.save();
		res.json({ mensaje: 'Tecnología agregada' });
	} catch (error) {
		console.log(error);
		next();
	}
};
// mostrar tecnologias
exports.getTechnologys = async (req, res, next) => {
	try {
		const technologys = await Technology.find({});
		res.json(technologys);
	} catch (error) {
		console.log(error);
		next();
	}
};
// actualizar tecnologis
exports.updateTechnology = async (req, res, next) => {
	try {
		const technology = await Technology.findOneAndUpdate(
			{ _id: req.params.technologyId },
			req.body,
			{ new: true },
		);
		res.json(technology);
	} catch (error) {
		console.log(error);
		next();
	}
};
// eliminar una tecnologia
exports.removeTechnology = async (req, res, next) => {
	try {
		await Technology.findOneAndDelete({
			_id: req.params.technologyId,
		});
		res.json({ mensaje: 'Tecnologia eliminada' });
	} catch (error) {
		console.log(error);
		next();
	}
};
