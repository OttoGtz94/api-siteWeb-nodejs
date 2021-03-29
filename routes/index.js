const express = require('express');
const {
	newProject,
	getProjects,
	getProject,
	updateProject,
	removeProject,
} = require('../controller/project.controller');
const {
	newTechnology,
	getTechnologys,
	updateTechnology,
	removeTechnology,
} = require('../controller/technologys.controller');
const router = express.Router();

module.exports = function () {
	// Agregar proyectos
	router.post('/projects', newProject);

	// obtener proyectos
	router.get('/projects', getProjects);

	// obtener un solo proyecto
	router.get('/projects/:projectId', getProject);

	// actualizar proyecto
	router.put('/projects/:projectId', updateProject);

	// eliminar proyecto
	router.delete('/projects/:projectId', removeProject);

	// agregar una tecnologia
	router.post('/technologys', newTechnology);

	// obtener tecnologias
	router.get('/technologys', getTechnologys);

	// actualizar tecnologia
	router.put('/technologys/:technologyId', updateTechnology);

	// eliminar tecnologia
	router.delete('/technologys/:technologyId', removeTechnology);

	return router;
};
