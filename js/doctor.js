var apiKey = require('./../.env').apiKey;

function Doctor(name, specialty) {
  this.name = name;
  this.specialty = specialty;
}

Doctor.prototype.getDoctors = function(name, specialty) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&query=' + specialty + '&location=wa-seattle&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
    console.log(result);
  })
  .fail(function(error) {
    console.log('fail');
  });
};

exports.doctorModule = Doctor;
