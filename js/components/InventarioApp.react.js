var React = require("react");
var AppBar = require('material-ui/lib/app-bar');
var FlatButton = require('material-ui/lib/flat-button');
var LeftNav = require('material-ui/lib/left-nav');
var MenuItem = require('material-ui/lib/menus/menu-item');

var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardMedia = require('material-ui/lib/card/card-media');
var RaisedButton = require('material-ui/lib/raised-button');
var TextField = require('material-ui/lib/text-field');

var InventarioApp = React.createClass({
	getInitialState: function () {
		return {
			open: false,
			showMenuButton: false
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
    				showMenuIconButton={this.state.showMenuButton}
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
			    <RaisedButton label="Login" primary={true} style={{marginTop:'20'}}/>
			    </div>
        	</div>
		);
	}
});

module.exports = InventarioApp;