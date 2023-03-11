var random_number = require('random-number');

const getCode = () => {
    var options = {
        min: 0, max: 9999, integer: true
    }
    
    return random_number(options);
}

exports.getCode = getCode