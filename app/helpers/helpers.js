const helpers = {
    getQueryVariable: (variable) => {
        {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                    return pair[1];
                }
            }
            return (false);
        }
    },
    initialsToUpper: (mystring) => {
        mystring = mystring.split(" ").map((word) => {word = word.charAt(0).toUpperCase() + word.substring(1); console.log(word); return word}).join(" ")

        return mystring
    },

    kelvinToFahrenheit: (k) => {
        return parseInt(1.8*(k-273)+32)
    }
}

module.exports = helpers;