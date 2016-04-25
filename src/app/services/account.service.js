
class AuthProvider {
	
	login(credentials) {
        var request = new Request({
        	url: "localhost:8080/api/authentication",
		  	method: "POST",
		  	data: 'j_username=' + encodeURIComponent(credentials.username) +
                '&j_password=' + encodeURIComponent(credentials.password) +
                '&remember-me=' + credentials.rememberMe + '&submit=Login',
		  	before: function(xhr) {
		  		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		  		xhr.setRequestHeader('X-CSRF-TOKEN', '8b93222c-ade8-4dba-99e0-e49fa6362d2b');
		  	},
		  	success: function(response) { return response; },
		  	error: function(response) { return response; },
		  	complete: function(response) { true }
        }).send();
	}

	logout () {
	    // logout from the server
	    var request = new Request({
	    	url: "localhost:8080/api/logout",
	    	success: function(response) {
		        // to get a new csrf token call the api
		        localStorage.remove('CSRF-TOKEN');
	    		var secondRequest = new Request({
	    			url: "localhost:8080/api/account"
	    		}).send();
	    		return response;
	    	},
	    	error: function(response) { return response; },
		  	complete: function(response) { true }
	    }).send();
    }
}

export default AuthProvider;