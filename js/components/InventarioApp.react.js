var React = require("react");
var AppBar = require('material-ui/lib/app-bar');
var FlatButton = require('material-ui/lib/flat-button');
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menus/menu-item');

var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardMedia = require('material-ui/lib/card/card-media');
var FlatButton = require('material-ui/lib/flat-button');
var TextField = require('material-ui/lib/text-field');

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
  				<LeftNav
	  				open={this.state.open}
	  				docked={false}
	  				onRequestChange={open => this.setState({open})}
	  			>
	       		    <MenuItem>Formulario 1</MenuItem>
	       	   		<MenuItem>Formulario 2</MenuItem>
	        	</LeftNav>
	        	<div style={{textAlign:'center'}}>
	        	<h2>Bienvenido a InventarioApp</h2>
		    	<TextField
			      hintText="Usuario"
			      floatingLabelText="Usuario"
			      
			    /><br/>
			    <TextField
			      hintText="Password"
			      floatingLabelText="Password`"
			      type="password"
			    /><br/>
			    <FlatButton label="Login" color/>
			    </div>
        	</div>
		);
	}
});

module.exports = InventarioApp;