var Doctor = require('./../js/doctor.js').doctorModule;

var displayResults = function(doctors) {
  $('#display-results').empty();
  doctors.forEach(function(doctor) {
    $('#display-results').append('<li><ul><li><b>Doctor: </b>' + doctor.name + '</li><li><b>Practice: </b>' + doctor.practice + '</li><li><b>Address: </b>' + doctor.address + '</li><li><b>Bio: </b>' + doctor.bio + '</li></ul></li>');
  });
};

$(document).ready(function() {
  var searchObject = new Doctor('testname', 'testpractice', 'testaddress', 'testbio');
  $('#doctor-form').submit(function() {
    event.preventDefault();
    var inputtedName = $('#name').val();
    var inputtedSpecialty = $('#specialty').val();

    searchObject.getDoctors(inputtedName, inputtedSpecialty, displayResults);
    console.log(searchObject);
  });
});
