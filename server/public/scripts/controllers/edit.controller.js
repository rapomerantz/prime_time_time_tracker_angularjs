app.controller('EditController', ['TrackerService', function (TrackerService) {
    console.log('EditController has been loaded');
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



    self.getClients(); 
    self.getProjects(); 
    self.getTasks(); 
    
//END OF INPUT CONTROLLER
}])

