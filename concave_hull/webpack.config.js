/*
* @Author: giserpan
* @Date:   2017-11-01 11:45:04
* @Last Modified by:   giserpan
* @Last Modified time: 2017-11-01 14:34:45
*/
const path = require('path');
module.exports = {
	entry: './index.js',
	output: {
		library: "concave_hull",
  		libraryTarget: "umd",
		filename: './bundle.js',
		path: path.resolve(__dirname, 'demo')
	}
};