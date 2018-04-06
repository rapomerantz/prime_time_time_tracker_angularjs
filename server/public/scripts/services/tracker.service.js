app.service('TrackerService', ['$http','$mdDialog', function($http, $mdDialog) {
    console.log('TrackerService is loaded');
    let self = this; 


    self.clientList = {list: []}; 
    self.projectList = {list: []}; 
    self.taskList = {list: []}; 
    self.fullTable = { list: [] }; 


//GET for fullTable list
    self.collectProjects = function () {
        console.log('collecting projects');
        $http.get('/clients/fullTable')
        .then(function(response) {
            console.log("successful GET /clients/fullTable", response.data);
            self.fullTable.list = response.data; 
        })
        .catch(function(error) {
            console.log("error in GET /clients", error);
        })
    }


//POST for /clients
    self.addClient = function(newClient) {
        // console.log('in POST for addClient' ,newClient);
        $http.post('/clients', newClient)
        .then(function(response) {
            // console.log("successful POST /clients");
            self.getClients(); 
            self.collectProjects(); 
        })
        .catch(function(error) {
            console.log("error in POST /clients", error);
            
        })
    }
//GET for /clients 
        self.getClients = function() {
            // console.log('in GET for /clients');
            $http.get('/clients')
            .then(function(response) {
                // console.log("successful GET /clients", response.data);
                self.clientList.list = response.data; 
            })
            .catch(function(error) {
                console.log("error in GET /clients", error);
            })
        }

//POST for /projects
    self.addProject = function(newProject) {
        // console.log('in POST for addProject' ,newProject );
        $http.post('/projects', newProject)
        .then(function(response) {
            // console.log("successful POST /projects");
            self.getProjects(); 
            self.collectProjects(); 
        })
        .catch(function(error) {
            console.log("error in POST /projects", error);
        })
    }


//GET for /projects 
    self.getProjects = function() {
        // console.log('in GET for /projects');
        $http.get('/projects')
        .then(function(response) {
            // console.log("successful GET /projects", response.data);
            self.projectList.list = response.data; 
        })
        .catch(function(error) {
            console.log("error in GET /projects", error);
        })
    }

//POST for /tasks
    self.addTask = function(newTask) {
        // console.log('in POST for addTask', newTask );
        $http.post('/tasks', newTask)
        .then(function(response) {
            // console.log("successful POST /tasks");
            self.getTasks(); 
            self.collectProjects(); 
        })
        .catch(function(error) {
            console.log("error in POST /tasks", error);
        })
    }


//GET for /tasks 
    self.getTasks = function() {
        // console.log('in GET for /tasks');
        $http.get('/tasks')
        .then(function(response) {
            // console.log("successful GET /tasks", response.data);
            self.taskList.list = response.data; 
        })
        .catch(function(error) {
            console.log("error in GET /tasks", error);
        })
    }

//DELETE task from /tasks
    self.deleteTask = function (taskId, ev) {
        //mdDialog 
        var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete this task?')
        .textContent('This cannot be undone.')
        .ariaLabel('Delete Task?')
        .targetEvent(ev)
        .ok('Yes, I\'m sure')
        .cancel('Nevermind');

        $mdDialog.show(confirm).then(function() {
            //function to run on confirm
            $http.delete('/tasks/' + taskId)
            .then(function(response) {
                console.log("successful DELETE /tasks");
                self.collectProjects(); 
            })
            .catch(function(error) {
                console.log("error in DELETE /tasks", error);
            })
        }, function() {
            //function to run cancel
        });
    }

//DELETE project from /projects
    self.deleteProject = function (projectId, ev) {
        //mdDialog 
        var confirm = $mdDialog.confirm()
        .title('Are you sure you want to remove this project?')
        .textContent('This will remove all associated tasks as well.')
        .ariaLabel('Delete project?')
        .targetEvent(ev)
        .ok('Yes, I\'m sure')
        .cancel('Nevermind');

        $mdDialog.show(confirm).then(function() {
            //function to run on confirm
            $http.delete('/projects/' + projectId)
            .then(function(response) {
                console.log("successful DELETE /clients");
                self.collectProjects(); 
            })
            .catch(function(error) {
                console.log("error in DELETE /clients", error);
            })
        }, function() {
            //function to run cancel
        });
    }


//DELETE client from /clients
    self.deleteClient = function (clientId, ev) {
        //mdDialog 
        var confirm = $mdDialog.confirm()
        .title('Are you sure you want to remove this client?')
        .textContent('This will remove all associated projects & tasks as well.')
        .ariaLabel('Delete client?')
        .targetEvent(ev)
        .ok('Yes, I\'m sure')
        .cancel('Nevermind');

        $mdDialog.show(confirm).then(function() {
            //function to run on confirm
            $http.delete('/clients/' + clientId)
            .then(function(response) {
                console.log("successful DELETE /clients");
                self.collectProjects(); 
            })
            .catch(function(error) {
                console.log("error in DELETE /clients", error);
            })
        }, function() {
            //function to run cancel
        });
    }    



//PUT function for client.html
    self.editTask = function (fullObject, ev) {
        //mdDialog options
        $mdDialog.show({
            controller: 'EditController as vm',
            templateUrl: '/views/templates/editMenu.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
          })
          .then(function(answer) {
            $http({
                method: "PUT", 
                url: '/clients/' 
            })
            .then(function(response) {
                console.log("successful DELETE /clients");
                self.collectProjects(); 
            })
            .catch(function(error) {
                console.log("error in DELETE /clients", error);
            })

          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
    }    




}]);