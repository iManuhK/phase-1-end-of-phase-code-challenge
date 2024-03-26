//function declaration for points deduction function
function calculateDemerit(speed){
//declare and initialize speed limit
    const limit = 70
//introduce conditional statement to check for speed less or equal to 70km/hr
    if(speed <=limit) {
        return `Ok`
     }
//alternate statement to calculate deduction points for speed more than speed limit and points more than 12
//five km/hr equal 1 point
    else if(((speed-limit)/5)>12){
        return `Points:` + (speed-limit)/5 +`:- License suspended`
     }
//last statement to catch speeds more than the limit but calculated points less than 12   
    else {
        return `Points:`+ (speed-limit)/5
     }
 }
 //function call
 calculateDemerit(80)