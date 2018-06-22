
// HAL's opening message when Dave clicks in the chatform.

$("#chatInput").one( "click", function() {
  var openingMessage = ("Good morning, Dave");
  document.getElementById("hal").innerHTML += openingMessage + "<br/>";
});

// Add an event listener to the form to submit Dave's message.

document.getElementById("chatForm").addEventListener("submit", function(event) {
  event.preventDefault();
  returnResponse();
});


// Responses from HAL to Dave. Calling functions below.

function returnResponse() {
  var chatBotInput = document.getElementById("chatInput").value;
  document.getElementById("dave").innerHTML += chatBotInput + "<br/>";
  switch(chatBotInput) {
      case "Open the pod bay doors please, HAL":
        responseOne();
        break;
      case "Who are you, HAL?":
        responseTwo();
        break;
      case "Thanks":
        text = "You're welcome, Dave";
        break;
    case "Do you have a side-kick, HAL?":
        responseFour();
        break;
      default:
        responseThree();
        break;
  }
      document.getElementById("hal").innerHTML += text + "<br/>";

}

// functions that will get called in the switch statement


  function responseOne() {
    var arrayClassmate = ["Alex", "Joanna", "Josh", "Sonyl", "Katie", "Bernardo", "Colburn", "Courtney"];
    var randomClassmate = arrayClassmate[Math.floor(arrayClassmate.length*Math.random())];
    var one = "Sure, Dave, I can open the pod bay doors or ";
    document.getElementById("hal").innerHTML += one += randomClassmate + " can do it." + "<br/>";
  }

  function responseTwo() {
    var two = "I'm an evil...errm, a helpful robot";
    document.getElementById("hal").innerHTML += two + "<br/>";
  }

  function responseThree() {
    var three = "What's up, Dave?";
    document.getElementById("hal").innerHTML += three + "<br/>";
  }

  function responseFour() {
    var four = "All good robots have side-kicks. Meet all of mine... ";
    var arrayClassmate = ["Alex", "Joanna", "Josh", "Sonyl", "Katie", "Bernardo", "Brandon", "Colburn", "Courtney", "Kevin", "Alexis", "Andy", "David", "Diana", "Ejaz", "Kalynne", "Miriam", "Nikki", "Tenny"];
    var i;
    for (i = 0; i < arrayClassmate.length; i++) {
      four += arrayClassmate[i] + ", ";
  }
    document.getElementById("hal").innerHTML += four + "<br/>";
  }
