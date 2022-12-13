const stringLength = (string) => {
    let count = string.length;
    if (count > 0 && count < 10){
        return count;
    }    
};

const reverseString = (string) => {
    return string.split('').reverse().join('');
};

module.exports = {stringLength,reverseString}
