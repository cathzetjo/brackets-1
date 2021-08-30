module.exports = function check(str, bracketsConfig) {
    let array = [];
    let strLength = str.length;
    for (let i = 0; i < strLength; i++) {
        let arrayLength = array.length;
        const check = bracketsConfig.find(bracketsConfig => bracketsConfig.includes(str[i]));
        if(check[0] === array[arrayLength - 1] && check[1]=== str[i]) {
            array.pop();
        } else {
            array.push(str[i]);
        }
    }
    return (array.length === 0);
};
