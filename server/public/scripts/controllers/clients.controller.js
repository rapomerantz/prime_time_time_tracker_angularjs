app.controller('ClientsController', ['$http', function ($http) {
    console.log('ClientsController has been loaded');
    let self = this;
    self.clientList = {list: []}; 
    self.projectList = {list: []}; 


//POST for /clients
    self.addClient = function(newClient) {
        console.log('in POST for addClient' ,newClient);
        $http.post('/clients', newClient)
        .then(function(response) {
            console.log("successful POST /clients");
            self.getClients(); 
        })
        .catch(function(error) {
            console.log("error in POST /clients", error);
            
        })
    }
//GET for /clients 
        self.getClients = function() {
            console.log('in GET for /clients');
            $http.get('/clients')
            .then(function(response) {
                console.log("successful GET /clients", response.data);
                self.clientList.list = response.data; 
            })
            .catch(function(error) {
                console.log("error in GET /clients", error);
            })
        }

//POST for /projects
    self.addProject = function(newProject) {
        console.log('in POST for addProject' ,newProject );
        $http.post('/projects', newProject)
        .then(function(response) {
            console.log("successful POST /projects");
            //call GET for projects
        })
        .catch(function(error) {
            console.log("error in POST /projects", error);
        })
    }


//GET for /projects 
    self.getProjects = function() {
        console.log('in GET for /projects');
        $http.get('/projects')
        .then(function(response) {
            console.log("successful GET /projects", response.data);
            self.projectList.list = response.data; 
        })
        .catch(function(error) {
            console.log("error in GET /projects", error);
        })
    }




self.getClients(); 
self.getProjects(); 



//END OF CLIENT CONTROLLER
}])

