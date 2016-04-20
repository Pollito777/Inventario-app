var React = require("react");

var Header = React.createClass({
	render: function() {
		return (
			<ul>
				<li>Home</li>
				<li>Sign In</li>
			</ul>
		);
	}	
});

module.exports = Header;