app.controller('ClientsController', ['TrackerService', '$http', function (TrackerService, $http) {
    console.log('ClientsController has been loaded');
    let self = this;

    self.clientList = TrackerService.clientList; 
    self.projectList = TrackerService.projectList;
    self.taskList = TrackerService.taskList; 

    self.addClient = TrackerService.addClient;
    self.addProject = TrackerService.addProject;
    self.addTask = TrackerService.addTask;

    self.getClients = TrackerService.getClients;
    self.getProjects = TrackerService.getProjects;
    self.getTasks = TrackerService.getTasks;

    self.collectProjects = function () {
        console.log('collecting projects');
        


    }





    self.getClients(); 
    self.getProjects(); 
    self.getTasks(); 

//END OF CLIENT CONTROLLER
}])

