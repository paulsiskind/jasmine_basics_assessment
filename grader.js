module.exports = {
//Will work on all this code more tomorrow... Going to make a commit now.  Just incase something happen tomorrow and I can't make any changes.
letterGrader: function(x){
    if (x>=90 && x<103){
        return 'A';
    }else if (x>=80 && x<90){
        return 'B';
    }else if (x>=70 && x<80){
        return 'C';
    }else if (x>=60 && x<70){
        return 'D';
    }else if (x<60){
        return 'F'
    }else if (x>103){
        return 'Error'
    }//Will refactor later
},

averageScore: function(score){
   var result=0;
    for (i in score){
        result += score[i]; 
    }return (result)/score.length;
},

medianScore: function(scores){
   scores.sort( function(a,b) {return a - b;} );

    var half = Math.floor(scores.length/2);

    if(scores.length % 2)
        return scores[half];
    else
        return (scores[half-1] + scores[half]) / 2.0;
}, 

modeScore: function(score){
    var obj = {};
    var matches = 0;
    var result;
    score.forEach(function modeScore(num){
        obj[num] = (obj[num] || 0)+1;
        
        if(matches<obj[num]){
            matches=obj[num];
            result = num;
        }
    });return result;
    }
    


};