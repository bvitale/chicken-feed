// Main JavaScript source for chicken feed

var adminApp = angular.module('chickenApp', ['ngRoute']);

/* Slide the menu back up after a menu selection is made */
$(function() {
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});