// Leetcode Question #657: https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let vertical = 0; // Keep track of Up and Down
    let horizontal = 0; // Keep track of Left and Right
    for(let i = 0; i < moves.length; i++) {
        switch(moves[i]) {
            case 'U':
                vertical++;
                break;
            case 'D':
                vertical--;
                break;
            case 'R':
                horizontal++;
                break;
            case 'L':
                horizontal--;
                break;
            default:
                break;
        }
    }
     if(vertical == 0 && horizontal == 0) {
            return true;
        } else {
            return false;
        }
};

console.log(judgeCircle("UDUDUDDDUU"));