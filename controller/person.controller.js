const Person = require('../model/person.model');

exports.newPerson = async (req, res, next) => {
	const person = new Person(req.body);
	try {
		await person.save();
		res.json(person);
	} catch (error) {
		console.log(error);
		next();
	}
};

exports.getPerson = async (req, res, next) => {
	try {
		const person = await Person.find({}).limit(1);
		res.json(person);
	} catch (error) {
		console.log(error);
		next();
	}
};

exports.updatePerson = async (req, res, next) => {
	try {
		const person = await Person.findOneAndUpdate(
			{ _id: req.params.personId },
			req.body,
			{ new: true },
		);
		res.json(person);
	} catch (error) {
		console.log(error);
		next();
	}
};
