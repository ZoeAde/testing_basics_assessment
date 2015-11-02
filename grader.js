var Grader = function() {};

/////////////// Letter Grader //////////////
Grader.prototype.letterGrader = function(num) {
  switch (true) {
    case (95 <= num && num < 101):
      return 'A+';
    case (93 <= num && num < 95):
      return 'A';
    case (90 <= num && num < 93):
      return 'A-';
    case (88 <= num && num < 90):
      return 'B+';
    case (83 <= num && num < 88):
      return 'B';
    case (80 <= num && num < 83):
      return 'B-';
    case (78 <= num && num < 80):
      return 'C+';
    case (73 <= num && num < 78):
      return 'C';
    case (70 <= num && num < 73):
      return 'C-';
    case (68 <= num && num < 70):
      return 'D+';
    case (63 <= num && num < 68):
      return 'D';
    case (60 <= num && num < 63):
      return 'D-';
    case (num < 60):
      return 'F';
  }
};

/////////////// Average ////////////////////
Grader.prototype.averageScore = function(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total/array.length;
};


/////////////// Median //////////////////////
Grader.prototype.medianScore = function(array) {
  var newArr = array.sort();
  var middleIndex = Math.floor(array.length/2);

  if (newArr.length % 2 !== 0) {
    return newArr[middleIndex];
  }
  else {
    return (newArr[middleIndex - 1] + newArr[middleIndex])/2;
  }
};


/////////////////// Mode //////////////////
Grader.prototype.modeScore = function(array) {
  var obj = {};
  var numberAppearances = 0;
  var mode = 0;

  array.forEach(function(number) {
    if (obj[number]) {
      obj[number]++;
    }
    else {
      obj[number] = 1;
    }

    if (obj[number] > numberAppearances) {
      mode = number;
      numberAppearances = obj[number];
    }
    else if (obj[number] === numberAppearances) {
      mode = [mode, number];
    }
  });
  return mode;
};



module.exports = Grader;
