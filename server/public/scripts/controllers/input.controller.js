app.controller('InputController', ['TrackerService', function (TrackerService) {
    console.log('InputsController has been loaded');
    let self = this;
    self.clientInShow = false; 
    self.projectInShow = false; 
    self.taskInShow = false; 


//functions hiding and showing CLIENT/PROJECT/TASK inputs    
    self.showClientInput = function () {
        self.clientInShow = !self.clientInShow;
        self.projectInShow = false; 
        self.taskInShow = false; 

    }
    self.showProjectInput = function () {
        self.clientInShow = false; 
        self.projectInShow = !self.projectInShow;
        self.taskInShow = false; 

    }
    self.showTaskInput = function () {
        self.clientInShow = false; 
        self.projectInShow = false; 
        self.taskInShow = !self.taskInShow;

    }

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

