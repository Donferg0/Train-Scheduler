  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDFKIgofBoxCBI2Ww9ZtE8yzuZ8ULd9MnY",
    authDomain: "first-database-3d845.firebaseapp.com",
    databaseURL: "https://first-database-3d845.firebaseio.com",
    projectId: "first-database-3d845",
    storageBucket: "first-database-3d845.appspot.com",
    messagingSenderId: "287716090893"
  };
  firebase.initializeApp(config);

  var db = firebase.database();

  var train = "";
  var destination = "";
  var time = "";
  var frequency = "";

  db.ref().on("child_added", function(snapshot) {

    train = snapshot.val().train
    destination = snapshot.val().destination
    time = snapshot.val().time
    frequency = snapshot.val().frequency
  
    $("#trains > tbody").append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "</td></tr>");
  })

$("#submitTrain").on("click", function() {
    //prevent webpage from resetting when hitting submit button
    event.preventDefault();

    train = $("#train").val().trim();
    destination = $("#destination").val().trim();
    time = moment($("#time").val().trim(), "HH:mm").subtract(10, "years").format("X")
    frequency = $("#frequency").val().trim();

    db.ref().push({
        train:  train,
        destination: destination,
        time: time,
        frequency:  frequency,
      });

      train = $("#train").val("")
      destination = $("#destination").val("")
      time = $("#time").val("")
      frequency = $("#frequency").val("")
    
})