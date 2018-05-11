/**
 * Get all the nodes that are available for testing.
 * @return {array} of the nodes that have been found.
 */
function getNodes(parser) {
	var nodeNames = parser.nodeNames;

	var nodes = [];
	
	nodeNames.forEach(name => {
		nodes.push(parser.nodeNamed(name));
	});

	return nodes;
}

/**
 * Write the nodes into their own seperate files and save those files using the name of the current node.
 * @param {Map} nodes key value pairs of JSON versions of the nodes as values and their names as the respective keys.
 */

function convertNodesToJSON(nodes) {
	nodes.forEach(node => {
		let object = checkObjectProperties(node);
		let json = JSON.stringify(object, null, 4);
		let fileName = node.name.replace( /\s/g, "");
		writeJSONToFile(json, fileName);
	});
}

/**
 * Check each object and its properties, for each object return the object or go into the object and check its properties and return those properties.
 * @param {Object} instance to be traversed.
 * @return {Object} the object data.
 */
function checkObjectProperties(instance) {
	if(instance.publicProperties != null) {
		
		const jsonable = {className: instance.constructor.name};
		
		let publicProperties = Object.getOwnPropertyNames(Object.getPrototypeOf(instance));

		publicProperties.forEach(property =>{
			jsonable[property] = checkObjectProperties(instance[property]);
		});

		if (instance.hasStatements != null) {
			jsonable["statements"] = checkObjectProperties(instance["statements"]);
		}		

		return jsonable;
	} else if (instance instanceof Array) {	
		return instance.map((item) => {return checkObjectProperties(item)});
	} else if (typeof instance === "object") {
		return Object.assign({}, instance);
	} else {
		return instance;
	}
}

/**
 * Write the nodes into their own seperate files and save those files using the name of the current node.
 * @param {Map} nodes key value pairs of JSON versions of the nodes as values and their names as the respective keys.
 */
function writeJSONToFile(json, fileName) {
	const fs = require('fs');

	fileName = fileName + '.json';
	let dir = './tests/out/' + fileName;

	fs.writeFile(dir, json, (err) => {
		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});
}


class ParserTest {
	nodesTest(parser) {
		var nodes = getNodes(parser);

		convertNodesToJSON(nodes);
	}

	getWorking(parser) {
		var nodes = [parser.nodeNamed("Basic Lines")];
		convertNodesToJSON(nodes);
	}
}

module.exports = ParserTest; 