var Grader = require('./grader.js');
var grader = new Grader();

///////////////// Letter Grader Tests ////////////////
describe('LetterGrader', function() {
  it('returns A+', function() {
    var result = grader.letterGrader(99);
    expect(result).toEqual('A+');
  });

  it('returns B-', function() {
    var result = grader.letterGrader(81);
    expect(result).toEqual('B-');
  });

  it('returns C', function() {
    var result = grader.letterGrader(73);
    expect(result).toEqual('C');
  });

  it('returns F', function() {
    var result = grader.letterGrader(59);
    expect(result).toEqual('F');
  });
});

//////////// Average Tests /////////////////////////
describe('Average', function() {
  it('returns average', function() {
    var result = grader.averageScore([90, 95, 87, 60]);
    expect(result).toEqual(83);
  });

  it('returns 90', function() {
    var result = grader.averageScore([90, 90, 90, 90]);
    expect(result).toEqual(90);
  });

  it('returns 50', function() {
    var result = grader.averageScore([1, 99]);
    expect(result).toEqual(50);
  });
});


/////////////// Median Tests ////////////////////////
describe('Median', function() {
  it('returns median value', function() {
    var result = grader.medianScore([52,80,80,86,94]);
    expect(result).toEqual(80);
  });

  it('returns median value', function() {
    var result = grader.medianScore([4,3,1]);
    expect(result).toEqual(3);
  });

  it('returns median value', function() {
    var result = grader.medianScore([12,15,52,79,80,86,94,95,96,97,98]);
    expect(result).toEqual(86);
  });

  it('returns average of two medians', function() {
    var result = grader.medianScore([20,10,16,21]);
    expect(result).toEqual(18);
  });

  it('returns average of two medians', function() {
    var result = grader.medianScore([1,2,4,6,7,8,9,9]);
    expect(result).toEqual(6.5);
  });

});


/////////////////// Mode Tests //////////////////////
describe('Mode Score', function() {
  it('returns mode of array', function() {
    var result = grader.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86]);
    expect(result).toEqual(92);
  });

  it('returns mode of array', function() {
    var result = grader.modeScore([1,1,1,2,3]);
    expect(result).toEqual(1);
  });

  it('returns mode of array', function() {
    var result = grader.modeScore([22,22,22]);
    expect(result).toEqual(22);
  });

  it('returns mode of array', function() {
    var result = grader.modeScore([1]);
    expect(result).toEqual(1);
  });

  it('returns array with multiple modes', function() {
    var result = grader.modeScore([1,1,2,2]);
    expect(result).toEqual([1,2]);
  });

  it('returns array with multiple modes', function() {
    var result = grader.modeScore([1,2,2,3,4,4]);
    expect(result).toEqual([2,4]);
  });

});
