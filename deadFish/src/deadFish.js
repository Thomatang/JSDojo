const parse = function (data) {
    let commandArray = data.split("");

    let value = 0;
    let result = [];

    let mapDeadFish = commandArray.map(command => {
        if(command === 'i') value++;
        if(command === 'd') value--
        if(command === "s") value = Math.pow(value, 2);
        if(command === "o") result.push(value);
    })
    return result;
}

export default parse;