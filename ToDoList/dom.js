var app = angular.module('myApp', []);
app.controller('tarefasCtrl', function($scope) {
    $scope.listaTarefas = [];

    $scope.addTarefa = function() {
      var date = new Date('dd-MM-yyyy');
        $scope.listaTarefas.push({nome:$scope.inputNomeTarefa, prazo:$scope.inputPrazoTarefa, done:false});
        $scope.inputNomeTarefa = "";
        $scope.inputPrazoTarefa = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
