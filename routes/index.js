const express = require('express');
const {
	newLab,
	getLabs,
	updateLab,
	getLab,
	removeLab,
} = require('../controller/lab.controller');
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

	// agregar lab
	router.post('/labs', newLab);

	// obtener labs
	router.get('/labs', getLabs);

	// obtener lab en especifico
	router.get('/labs/:labId', getLab);

	// actualizar lab
	router.put('/labs/:labId', updateLab);

	// eliminar lab
	router.delete('/labs/:labId', removeLab);

	return router;
};
