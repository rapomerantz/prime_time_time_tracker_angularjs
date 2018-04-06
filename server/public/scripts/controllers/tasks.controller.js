app.controller('TasksController', ['TrackerService', '$http', function (TrackerService, $http) {
    console.log('TasksController has been loaded');
    let self = this;

    self.fullTable = TrackerService.fullTable; 

    self.collectProjects = TrackerService.collectProjects; 

    //DELETE function from service 
    self.deleteTask = TrackerService.deleteTask; 

    //EDIT function from service
    self.editTask = TrackerService.editTask; 

    self.collectProjects(); 


}])