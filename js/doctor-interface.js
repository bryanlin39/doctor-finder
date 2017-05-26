var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctor-form').submit(function() {
    event.preventDefault();
    var inputtedName = $('#name').val();
    var inputtedSpecialty = $('#specialty').val();

    searchObject = new Doctor(inputtedName, inputtedSpecialty);
    
  });
});
