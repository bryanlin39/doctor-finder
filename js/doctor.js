var apiKey = require('./../.env').apiKey;

function Doctor(name, specialization) {
  this.name = name;
  this.specialization = specialization;
}

Doctor.prototype.getDoctors = function(name, specialization) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&query=' + specialization + '&location=wa-seattle&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
    console.log(result);
  })
  .fail(function(error) {
    console.log('fail');
  });
};

exports.doctorModule = Doctor;
