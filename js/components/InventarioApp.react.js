var React = require("react");
//var Header = require("./Header.react.js");
//var Footer = require("./Footer.react.js");
var AppBar = require("material-ui/lib/app-bar");
var FlatButton = require('material-ui/lib/flat-button');


var InventarioApp = React.createClass({
	render: function() {
		return (
			<AppBar
    			title="InventarioApp"
    			iconElementRight={<FlatButton label="Salir" />}
  			/>
		);
	}
});

module.exports = InventarioApp;