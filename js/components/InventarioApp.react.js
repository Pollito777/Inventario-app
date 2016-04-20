var React = require("react");
//var Header = require("./Header.react.js");
//var Footer = require("./Footer.react.js");
var AppBar = require('material-ui/lib/app-bar');
var FlatButton = require('material-ui/lib/flat-button');
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menus/menu-item');


var InventarioApp = React.createClass({
	getInitialState: function () {
		return {
			open: false
		}
	},
	
	_handleMenu: function(e) {
		console.log("Handle Menu");
		this.setState({open: !this.state.open});
	},

	render: function() {
		return (
			<div>
			<AppBar
    			title="InventarioApp"
    			onLeftIconButtonTouchTap={this._handleMenu}
    			iconElementRight={<FlatButton label="Salir" />}
  			/>
  			<LeftNav open={this.state.open}>
       		    <MenuItem>Menu Item</MenuItem>
       	   		<MenuItem>Menu Item 2</MenuItem>
        	</LeftNav>
        	</div>
		);
	}
});

module.exports = InventarioApp;