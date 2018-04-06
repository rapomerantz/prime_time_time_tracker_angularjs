app.controller('ReportsController', ['TrackerService', '$http', function (TrackerService, $http) {
    console.log('ReportsController has been loaded');
    let self = this;

    //List objects from service
    self.clientList = TrackerService.clientList; 
    self.projectList = TrackerService.projectList;
    self.taskList = TrackerService.taskList; 
    self.fullTable = TrackerService.fullTable; 

    //GET functions from service 
    self.getClients = TrackerService.getClients;
    self.getProjects = TrackerService.getProjects;
    self.getTasks = TrackerService.getTasks;
    self.collectProjects = TrackerService.collectProjects; 

//Functions called upon load
    self.collectProjects(); 
    self.getClients(); 
    self.getProjects(); 
    self.getTasks(); 

//END OF REPORTS CONTROLLER
}])

