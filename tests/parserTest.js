//const YarnParser = require('../src/index').Parser;



// const parserConfig = {
// 	preprocessOnly: false,
// 	preprocessDebug: false,
// };

 //const parser = new YarnParser();

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
			console.log(node[prop]);
			json += (JSON.stringify(node[prop], null, 4)) + "\n";
		});

		console.log(json);
		

		map.set(node.name, json);
	});

	return map;
}

function listAllProperties(o) {
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {  
      result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
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

class ParserTest {
	
	runTest (parser) {
		var nodes = getNodes(parser);

		
		
		if (nodes != null) {
			var mapedNodes = convertNodesToJSON(nodes);

			// for (var [key, value] of mapedNodes) {
			// 	console.log(key);
			// }

			writeNodesToFile(mapedNodes);
		}
    }
}

module.exports = ParserTest;