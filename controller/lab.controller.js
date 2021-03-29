const Lab = require('../model/lab.model');

// crear lab
exports.newLab = async (req, res, next) => {
	const lab = new Lab(req.body);
	try {
		await lab.save();
		res.json({ mensaje: 'Laboratorio agregado' });
	} catch (error) {
		console.log(error);
		next();
	}
};
// obtener labs
exports.getLabs = async (req, res, next) => {
	try {
		const labs = await Lab.find({});
		res.json(labs);
	} catch (error) {
		console.log(error);
		next();
	}
};
// obtener solo un lab
exports.getLab = async (req, res, next) => {
	try {
		const lab = await Lab.findById(req.params.labId);
		res.json(lab);
	} catch (error) {
		console.log(error);
		next();
	}
};
// actualizar lab
exports.updateLab = async (req, res, next) => {
	try {
		const lab = await Lab.findOneAndUpdate(
			{ _id: req.params.labId },
			req.body,
			{ new: true },
		);
		res.json(lab);
	} catch (error) {
		console.log(error);
		next();
	}
};
// eliminar lab
exports.removeLab = async (req, res, next) => {
	try {
		await Lab.findByIdAndDelete({ _id: req.params.labId });
		res.json({ mensaje: 'Laboratorio eliminado' });
	} catch (error) {
		console.log(error);
		next();
	}
};
