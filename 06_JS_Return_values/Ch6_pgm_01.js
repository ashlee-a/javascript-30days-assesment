// Returning a value from a function

var getMessage;
var getMyMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

getMyMessage = function () {
    return "I'm ready for a challenge!";
};

response = getMessage();

console.log(response);

// Call getMessage at the prompt
// > getMessage()

// Call getMyMessage at the prompt
// > getMyMessage()