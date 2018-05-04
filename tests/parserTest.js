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

	nodes.push(parser.nodeNamed("Basic Lines"));
	
	return nodes;
}

/**
 * Convert the given nodes to JSON objects for storage.
 * @param {array} nodes the nodes to be converted into JSON strings.
 * @return {Map} with the node names as keys with JSON strings of the nodes as values.
 */
function convertNodesToJSON(nodes) {
	var map = new Map();

	nodes.forEach(node => {
		var json = '';
		var props = listAllProperties(node);	

		props.forEach(prop => {
			json = json.concat(JSON.stringify(node[prop], null, 4));
		});

		map.set(node.name, json);
	});

	return map;
}

/**
 * Write the nodes into their own seperate files and save those files using the name of the current node.
 * @param {Map} nodes key value pairs of JSON versions of the nodes as values and their names as the respective keys.
 */
function writeNodesToFile(nodes) {
	const fs = require('fs');
	var iCount = 0;

	for (var [nodeName, nodeData] of nodes) {
		let fileName = 'node' + ++iCount + '.json';
		let dir = './tests/out/' + fileName;

		fs.writeFile(dir, nodeData, (err) => {
			if (err) {
				console.error(err);
				return;
			};
			console.log("File has been created");
		});
	}
}

function getAllMethods(object) {
	var methods = [];

	Object.getOwnPropertyNames(object).forEach(prop => {
		methods.push(prop);
	});

	return methods;

}


function getObjectProperties(object) {
	var propNames = getObjectPropertyNames(object);
	var objectMap = new Map();

	propNames.forEach(name => {
		let prop = object[name];

		//check if object
		if (typeof prop === "object") {
			if (prop instanceof Array) {
				console.log(name + ' => Array');
			} else {

			}
			console.log(name);
		}
		//check if instance of array
		//if yes foreach element if it's object repeat else should be string and print
			//object.set(prop.constructor.name, prop);
	});
}

function arrayCheck(arr) {
	arr.forEach(element => {
		switch (typeof element) {
			case 'string' :
				console.log(element);
				break;
			case 'object':

				break;
			// case : break;
		}
		if (typeof element === "string") {

		} else if (typeof element === "object") {

		}
	})
}


/**
 * Get the names of all the properties of the given object.
 * @param {object} o that will have the name of all its properties extracted.
 * @return {String[]} with the names of all the properties of the given object. 
 */
function getObjectPropertyNames(o) {
	var objectToInspect;     
	var propNames = [];

	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) { 
		propNames = propNames.concat(Object.getOwnPropertyNames(objectToInspect));
	}
	
	return propNames; 
}


class ParserTest {
	runTest (parser) {
		var nodes = getNodes(parser);

		if (nodes != null) {
			var mapedNodes = convertNodesToJSON(nodes);
			//writeNodesToFile(mapedNodes);
		}
	}

	getWorking(parser) {
		var node = parser.nodeNamed("Basic Lines");

		var props = getObjectProperties(node);
	}
	

	// testAllNodes () {
	// 	var nodes = getNodes(parser);
		
	// 	if (nodes != null) {
	// 		var mapedNodes = convertNodesToJSON(nodes);
	// 		writeNodesToFile(mapedNodes);
	// }

}

module.exports = ParserTest;