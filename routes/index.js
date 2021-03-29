const express = require('express');
const {
	newProject,
	getProjects,
	getProject,
	updateProject,
	removeProject,
} = require('../controller/project.controller');
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

	return router;
};
