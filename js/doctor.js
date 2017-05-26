var apiKey = require('./../.env').apiKey;

function Doctor(name, practice, address, bio) {
  this.name = name;
  this.practice = practice;
  this.address = address;
  this.bio = bio;
}

Doctor.prototype.getDoctors = function(name, specialty, displayResults) {
  var doctors = [];
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&query=' + specialty + '&location=wa-seattle&skip=0&limit=5&user_key=' + apiKey)
  .then(function(response) {
    for(var i = 0; i < 5; i++) {
      var doctorName = response.data[i].profile.first_name + ' ' + response.data[i].profile.last_name + ' ' + response.data[i].profile.title;
      var practiceName = response.data[i].practices[0].name;
      var practiceAddress = response.data[i].practices[0].visit_address.street + ', ' + response.data[i].practices[0].visit_address.city + ', ' + response.data[i].practices[0].visit_address.state + ' ' + response.data[i].practices[0].visit_address.zip;
      var bio = response.data[i].profile.bio;
      newDoctor = new Doctor(doctorName, practiceName, practiceAddress, bio);
      doctors.push(newDoctor);
    }
    console.log(doctors);
    displayResults(doctors);
  })

  .fail(function(error) {
    console.log('fail');
  });
};

exports.doctorModule = Doctor;
