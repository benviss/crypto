
var row;
var col;
var codeArray = [];
var results = [];
function numberTest(string) {
  var ntest = /[0-9]/gi;
  if (ntest.test(string)) {
    return true;
  }
  return false;
}

function removeSpecial(string) {
  var codeArray = string.split('');
  var special = /[\s!?.,]/;
  if (special.test(codeArray)) {
    for (var i = 0; i < codeArray.length; i++) {
      if(special.test(codeArray[i])) {
        codeArray.splice(i, (1));
        i -= 1;
      }
    }
  }
  return codeArray;
}

function findCol(number) {
   col = Math.floor(Math.sqrt(number));
  return col;
}
function findRow(number) {
   row = Math.ceil(Math.sqrt(number));
  return row;
}

function populateResults(array, row, col) {
  var idx2 = 0;
  idx3 = 1;
  for (var i = 0; i <= array.length; i++) {
    results[i] = codeArray[idx2];
    if((idx2 + col) > array.length) {
      idx2 = 0 + idx3;
      idx3 += 1;
    } else {
      idx2 += col;
    }
  }
  return results;
}

function createString(array){
  var answers = [];
  index = 0;
  var idx2 = 5;
    for (var i = 0; i < array.length; i+=5) {
      answers[index]=(results.slice(i,idx2).join(''));
      idx2 += 5;
      index += 1;
    }
    return answers;
}



function create(string) {
  var result;
  if(numberTest(string)) {
    return false;
  }
  codeArray = removeSpecial(string)
  findCol(codeArray.length);
  findRow(codeArray.length);
  result = populateResults(codeArray,row,col);
  console.log(result);
  result = createString(result);
  result = result.join(' ');
  return result;

}




$(document).ready(function() {

  $('form').submit(function(event) {
    $('p').detach();

  var userReturn;
  var userInput = $('#inputSentence').val();
  if (numberTest(userInput)) {
    alert('Please dont use numbers');

  } else if (userInput) {
    $('.results').append('<p class="answers">' + create(userInput) + '</p>');
  } else{
    alert('Please enter a sentence');
  }
  event.preventDefault();
  });

});
