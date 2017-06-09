"use strict";

var professoresModule = angular.module('ProfessorModule', []);

professoresModule.controller("ProfessorController", function ($scope) {
    // Faz a Ligação com a view e dados java
    $scope.professores = [
        {codigo: 1, nome: 'Marcelo', email: 'marcelo@email', fone: '54 36259-8523'},
        {codigo: 2, nome: 'Marcio', email: 'marcio@email', fone: '54 36259-8520'},
        {codigo: 3, nome: 'Alexandra', email: 'Alexnadra@email', fone: '54 36259-8521'},
        {codigo: 4, nome: 'Maria', email: 'maria@email', fone: '54 36259-8524'},
    ];
    
    $scope.carregaProfessor = function (professorSelecionado){
        $scope.professor = professorSelecionado;
    }
    
    $scope.limparCampos = function (){
        $scope.professor = null;
    }
    
    $scope.salvarProfessor = function (){
        $scope.professores.push($scope.professor);
        $scope.limparCampos();
        
    }
    
    $scope.excluirProfessor = function (){
        // esta Excluindo todos 
        // indexOf Remove o primeiro regisotro encontrado
        $scope.professores.splice($scope.professores.indexOf($scope.professor),1);
        $scope.limparCampos();
    }
});
