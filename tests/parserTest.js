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
//  */
// function convertNodesToJSON(nodes) {
// 	var map = new Map();

// 	nodes.forEach(node => {
// 		var json = '';
// 		var props = listAllProperties(node);	

// 		props.forEach(prop => {
// 			json = json.concat(JSON.stringify(node[prop], null, 4));
// 		});

// 		map.set(node.name, json);
// 	});

// 	return map;
// }

/**
 * Write the nodes into their own seperate files and save those files using the name of the current node.
 * @param {Map} nodes key value pairs of JSON versions of the nodes as values and their names as the respective keys.
 */
// function writeNodesToFile(nodes) {
// 	const fs = require('fs');
// 	var iCount = 0;

// 	for (var [nodeName, nodeData] of nodes) {
// 		let fileName = 'node' + ++iCount + '.json';
// 		let dir = './tests/out/' + fileName;

// 		fs.writeFile(dir, nodeData, (err) => {
// 			if (err) {
// 				console.error(err);
// 				return;
// 			};
// 			console.log("File has been created");
// 		});
// 	}
// }

function convertNodesToJSON(nodes) {
	nodes.forEach(node => {
		var json = "";
		
		json = checkObjectProperties(node, json);
		writeJSONToFile(json, node.name);
	});
}

/**
 * Check each object and its properties, for each object that is a string append it to the given json,
 * else recurse into the function until you reach a string type or end of function case.
 * @param {Object} object to be traversed.
 * @param {sting} json where object data will be appended to.
 * @return {string} the object data.
 */
function checkObjectProperties(object, name, json) {
	if (object instanceof Array) {	
		let allStrings = true;	
		object.forEach(element => {
			if (typeof element != "string") {
				allStrings = false;
			}
		});

		if (allStrings) {
			json = appendToJSON(json, object);
		} else {
			object.forEach(element => {
				console.log(element);
				json = appendToJSON(json, object);
				json = checkObjectProperties(element, element.constructor.name, json)
			});
		}		
	} else if (typeof object === "string") {
	 	json = appendToJSON(json, object);
	} else if (typeof object === "object") {
		
		let propNames = getObjectPropertyNames(object);	
		let objs = getObjects(object, propNames);

		if (objs.length == 0) {
			json = convertPropsToJSON(json, object, propNames);
		}

		objs.forEach(obj => {
			json = checkObjectProperties(obj, obj.constructor.name, json);
		});

		json = appendToJSON(json, object);
	}

	return json;
}

function getObjects(object, propNames) {

	var objs = [];

	propNames.forEach(propName => {
		if (propName != "__proto__" && propName != "location") {
			if (object[propName] != null && object[propName] != undefined && typeof object[propName] === "object") {
				console.log(propName);
				objs.push(object[propName]);
			}
		}	
	});

	return objs;
}

function convertPropsToJSON(json, object, propNames) {
	propNames.forEach(propName => {
		if (typeof object[propName] === "string") {
			json = appendToJSON(json, propName);
			json = appendToJSON(json, object[propName]);
		}
	});

	return json;
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

/**
 * Append the given data to the given json string
 * @param {string} json existing json string.
 * @param {sting} data to be appended to the given json string.
 * @return {string} the json string with the appended data.
 */
function appendToJSON(json, data) {
	json = json.concat(JSON.stringify(data, null, 4));
	return json;
}

/**
 * Write the nodes into their own seperate files and save those files using the name of the current node.
 * @param {Map} nodes key value pairs of JSON versions of the nodes as values and their names as the respective keys.
 */
function writeJSONToFile(json, fileName) {
	const fs = require('fs');

	fileName = '1.json';
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
	runTest (parser) {
		var nodes = getNodes(parser);

		if (nodes != null) {
			var mapedNodes = convertNodesToJSON(nodes);
			//writeNodesToFile(mapedNodes);
		}
	}

	getWorking(parser) {
		var nodes = [parser.nodeNamed("Basic Lines")];
		convertNodesToJSON(nodes);
	}
	

	// testAllNodes () {
	// 	var nodes = getNodes(parser);
		
	// 	if (nodes != null) {
	// 		var mapedNodes = convertNodesToJSON(nodes);
	// 		writeNodesToFile(mapedNodes);
	// }

}

module.exports = ParserTest;