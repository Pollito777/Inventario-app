import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

class InventarioApp extends React.Component {
	
	constructor(props,context) {
		super(props,context);
		this.state = {
			drawerOpened: false,
			showMenuButton: true
		};
	}

	handleMenu(){
		console.log(this);
		this.setState({drawerOpened: !this.state.drawerOpened});
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={getMuiTheme()}>
				<div>
					<AppBar
	    				title="InventarioApp"
	    				onLeftIconButtonTouchTap={ 
	    					e => {this.setState({drawerOpened: !this.state.drawerOpened}) } 
	    				}
	    				showMenuIconButton={this.state.showMenuButton}
	  				/>
	  				<Drawer
		  				open={this.state.drawerOpened}
		  				docked={false}
		  				onRequestChange={open => this.setState({drawerOpened: open})}
		  			>
		       		    <MenuItem>Formulario 1</MenuItem>
		       	   		<MenuItem>Formulario 2</MenuItem>
		        	</Drawer>
		        	<div style={{textAlign:'center'}}>
			        	<h2>Bienvenido a InventarioApp</h2>
				    	<TextField
					      hintText="Usuario"
					      floatingLabelText="Usuario"					      
					    /><br/>
					    <TextField
					      hintText="Password"
					      floatingLabelText="Password"
					      type="password"
					    /><br/>
					    <RaisedButton label="INGRESAR" primary={true} style={{marginTop:'20px'}}/>
				    </div>
	        	</div>
        	</MuiThemeProvider>
		);
	}
}

export default InventarioApp;