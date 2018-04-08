app.controller('ReportsController', ['TrackerService', '$http', 
                                    function (TrackerService, $http) {
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

    console.log('fullTable', self.fullTable);
    

    self.makeChart = function () {
        let fullTable = self.fullTable.list
        let clientArray = fullTable.map((e, i) => {
            return e.client; 
        })
        let hoursArray = fullTable.map((e, i) => {
            return e.act_time; 
        })
    
        var ctx = angular.element( document.querySelector( '#myChart' ) );
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: clientArray,
                datasets: [{
                    label: 'Billable Hours by Client',
                    data: hoursArray,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
        
    }

    self.makeChart(); 





//END OF REPORTS CONTROLLER
}])

