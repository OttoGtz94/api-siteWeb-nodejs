const Project = require('../model/project.model');

// crear nuevo proyecto
exports.newProject = async (req, res, next) => {
	const project = new Project(req.body);
	try {
		await project.save();
		res.json({ mensaje: 'Proyecto guardado' });
	} catch (error) {
		console.log(error);
		next();
	}
};
// obtener todos los proyectos
exports.getProjects = async (req, res, next) => {
	try {
		const projects = await Project.find({});
		res.json(projects);
	} catch (error) {
		console.log(error);
		next();
	}
};
// obtener un proyecto en especifico
exports.getProject = async (req, res, next) => {
	try {
		const project = await Project.findById(
			req.params.projectId,
		);
		res.json(project);
	} catch (error) {
		console.log(error);
		next();
	}
};
// actualizar un proyecto
exports.updateProject = async (req, res, next) => {
	try {
		const project = await Project.findOneAndUpdate(
			{ _id: req.params.projectId },
			req.body,
			{ new: true },
		);
		res.json(project);
	} catch (error) {
		console.log(error);
		next();
	}
};
// eliminar proyecto
exports.removeProject = async (req, res, next) => {
	try {
		await Project.findByIdAndDelete({
			_id: req.params.projectId,
		});
		res.json({
			mensaje: 'Proyecto eliminado',
		});
	} catch (error) {
		console.log(error);
		next();
	}
};
