var code = require('../grader.js');


describe("letterGrader", function(){
  it ('Gives letter grades to numbers', function(){
    expect(code.letterGrader(90)).toEqual("A");
  });
  it ('Takes 87 to = B', function(){
    expect(code.letterGrader(87)).toEqual('B');
  });
  it ('9999 to equal error', function(){
    expect(code.letterGrader(9999)).toEqual('Error');
  });
});


describe('averageScore', function(){
  it("averages an array of scores", function(){
    expect(code.averageScore([90,95,87,60])).toEqual(83);
  });
   it("average some more scores", function(){
    expect(code.averageScore([90,95,87,87,67,99])).toEqual(87.5);
   });
});

describe('medianScore', function(){
  it("takes the median number from an array", function(){
    expect(code.medianScore([52,80,80,86,94])).toEqual(80);
  });
});


describe('modeScore', function(){
  it('Return the number with the most occurences', function(){
    expect(code.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });
  it('more mode scores', function(){
    expect(code.modeScore([88,88,88,87,45,34,76,99])).toEqual(88);
     });
});