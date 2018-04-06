app.controller('ClientsController', ['TrackerService', '$http', function (TrackerService, $http) {
    console.log('ClientsController has been loaded');
    let self = this;

    //List objects from service
    self.clientList = TrackerService.clientList; 
    self.projectList = TrackerService.projectList;
    self.taskList = TrackerService.taskList; 
    self.fullTable = TrackerService.fullTable; 

    //POST Function from service
    self.addClient = TrackerService.addClient;
    self.addProject = TrackerService.addProject;
    self.addTask = TrackerService.addTask;

    //GET functions from service 
    self.getClients = TrackerService.getClients;
    self.getProjects = TrackerService.getProjects;
    self.getTasks = TrackerService.getTasks;
    self.collectProjects = TrackerService.collectProjects; 

    //DELETE functions from service 
    self.deleteTask = TrackerService.deleteTask; 
    self.deleteProject = TrackerService.deleteProject;

//Functions called upon load
    self.collectProjects(); 
    self.getClients(); 
    self.getProjects(); 
    self.getTasks(); 

//END OF CLIENT CONTROLLER
}])

