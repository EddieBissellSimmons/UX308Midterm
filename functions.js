//question 1
function calculateDollars(nickel,dime,quarter,loonie,toonie){
    let total = (nickel*0.05) + (dime*0.10) + (quarter*0.25) + (loonie*1) + (toonie*2);
    return total;
}

//question 2
function convertTemp(celsius){
    let fahrenheit = (celsius*(9/5))+32;
    return fahrenheit;
}

//question 3
function cubeVolume(height){
    let volume = height*height*height;
    return volume;
}

//question 4
function gymMembership(cost,friends){
    let finalCost;
    if (friends == 0){
        finalCost = cost
    } else if (friends == 1){
        finalCost = cost*0.95;
    } else if (friends == 2){
        finalCost = cost*0.90;
    } else if (friends >= 3){
        finalCost = cost*0.85;
    }
    return finalCost;
}

//question 5
function earthquakeCategory(intensity){
    let result;
    if (intensity<5){
        result = "Little or no damage!";
    } else if (intensity>=5 && intensity<5.5){
        result = "Some damage.";
    } else if (intensity>=5.5 && intensity<6.5){
        result = "Serious damage: walls may crack or fall.";
    } else if (intensity>=6.5 && intensity<7.5){
        result = "Disaster: buildings may collapse.";
    } else if (intensity>7.5){
        result = "Catastrophe: most buildings destroyed!"
    }
    return result;
}

//exporting the functions
export {calculateDollars, convertTemp, cubeVolume, gymMembership, earthquakeCategory}