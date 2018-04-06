app.service('TrackerService', ['$http','$mdDialog', function($http, $mdDialog) {
    console.log('TrackerService is loaded');
    let self = this; 


    self.clientList = {list: []}; 
    self.projectList = {list: []}; 
    self.taskList = {list: []}; 
    self.fullTable = { list: [] }; 


//GET for fullTable list
    self.collectProjects = function () {
        // console.log('collecting projects');
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
                $scope.status = 'Task removed.';
                console.log("successful DELETE /tasks");
                self.collectProjects(); 
            })
            .catch(function(error) {
                console.log("error in DELETE /tasks", error);
            })
        }, function() {
            //function to run cancel
            $scope.status = 'You decided to keep your debt.';
        });



    }




}]);