var React = require('react');
var ReactDOM = require('react-dom');
var InventarioApp = require('./components/InventarioApp.react.js')
injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

ReactDOM.render(<InventarioApp />, document.getElementById('inventario-app'));