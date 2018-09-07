var next = 0;
var currentQst;
var wrong = 0;
var right = 0;

$(document).ready(function () {
    $("#question").hide();
    $("#answers").hide();
    $("#continue").hide();
});

$("#button").on("click", function () {
    $("#question").show();
    $("#answers").show();
    $("#button").hide();
    loadQuestion();
    stopwatch.start();
});

var allQuestions = [question = {
    q1: "Who started their first day at Dunder Mifflin Scranton?",
    options: ["A. Jim Halpert", "B. Ryan Howard", "C. Michael Scott", "D. Erin Hannon"],
    correct: "B. Ryan Howard",
    img: "./assets/images/Ryan.jpg"

},
question2 = {
    q1: " Diversity Day: What famous comedian's stand up routine does Michael imitate?",
    options: ["A. Chris Rock", "B. Richard Pryor", "C. Robin Williams", "D. George Carlin"],
    correct: "A. Chris Rock",
    img: "./assets/images/rock.jpg"
},
question3 = {
    q1: "In S1E3 Health Care: Which of these is NOT one of Jim and Pam's made up diseases?",
    options: ['A.Killer nanorobots', 'B. Hot dog fingers', 'C.Spontaneous dental hydroplosion', 'D. Hair cancer'],
    correct: "D. Hair cancer",
    img: "./assets/images/hair.jpg"
},
question4 = {
    q1: "In S2E6 The Fight: What is Dwight's Sensei's name?",
    options: ["A. Ira", "B. George", "C. Stuart", "D. Mr. Miyagi"],
    correct: "A. Ira",
    img: "./assets/images/Ira.jpg"
},
question5 = {
    q1: "In S2E11 Booze Cruise: Who breaks up?",
    options: ["A. Pam and Roy", "B. Jim and Katy", "C. Kelly and Ryan", "D. Phyllis and Bob"],
    correct: "B. Jim and Katy",
    img: "./assets/images/last.jpg"
},
];



function loadQuestion() {
    $("#question").empty();
    $("#answers").empty();
    $("#question").text(allQuestions[next].q1);
    currentQst = allQuestions[next];

    allQuestions[next].options.forEach(element => {
        var answerDiv = $("<div>");
        answerDiv.addClass("answer");
        answerDiv.text(element);
        $("#answers").append(answerDiv);
        $("#question").show();
        $("#answers").show();
    });

};

$(document).on("click", ".answer", function () {

    if ($(this).text() === allQuestions[next].correct) {
        $("#question").hide();
        $("#answers").hide();
        $("#continue").show();
        show_image();
        right++;
        stopwatch.reset();
        $("#right").text("Right: " + right);
        
          
    }

    else {
        alert("looser");
        next++;
        loadQuestion();
        wrong++;
        $("#wrong").text("Wrong: " + wrong);
       
    }
})

$("#continue").on("click", function () {
    $(".imgs").hide();
    next++;
    loadQuestion();
    stopwatch.reset();
    // $("#display").text(stopwatch.time);
})


function show_image() {
    var img = document.createElement("img");
    img.src = currentQst.img;
    $(img).addClass("imgs");
    console.log(currentQst);
    document.body.appendChild(img);
    stopwatch.stop();  

}

var intervalId;
var clockRunning = false;
var stopwatch = {
    time: 5,

    reset: function() {

          time = 5;

          $("#display").text(stopwatch.time);
          
        },

    start: function () {
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }
    },

    count: function () {

        stopwatch.time--;
        if (stopwatch.time === 0) {
        
            alert("Loser!")
            wrong++;
            $("#wrong").text("Wrong: " + wrong);
            stopwatch.time = 5;
            next++;
            loadQuestion();  
        }

        $("#display").text(stopwatch.time);
    },

    stop: function () {
        clearInterval(intervalId);
        clockRunning = false;
        // $("#display").hide(stopwatch.time);
        $("#display").text(stopwatch.time);
    
    }

};


function showScore() {

	$('#question').append("<h2>" + right + " correct</h2>");
	$('#answers').append("<h2>" + wrong + " incorrect</h2>");
    stopwatch.stop();
    $("#display").empty(stopwatch.time);
};

