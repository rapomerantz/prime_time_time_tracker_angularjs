app.controller('TasksController', [function () {
    console.log('TaskController has been loaded');
    let self = this;

    self.addProject = function (newProject) {
        console.log('in addProject', newProject);
        http.post('/projects', newProject)
        .then(function(response) {
            console.log('successful POST of newProject');
            //run GET function here
        })
        .catch(function(error) {
            console.log('error in POST of newProject');
        })
    }   


}])