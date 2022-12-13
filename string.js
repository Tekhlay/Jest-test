const stringLength = (string) => {
    let count = string.length;
    if (count > 0 && count < 10){
        return count;
    }    
};

const reverseString = (string) => {
    return string.split('').reverse().join('');
};

class calculator{
    constructor(num1, num2){
        this.num1=num1;
        this.num2=num2;
    }
    add(x,y){
        return x+y;
    }
  subtract(x,y){
        return x-y;
    }
  divide(x,y){
        return x/y;
    }
  multiply(x,y){
        return x*y;
    }
}

const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}


module.exports = {stringLength,reverseString, calculator,capitalize}
