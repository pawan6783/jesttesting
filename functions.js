const { default: Axios } = require("axios");

const functions = {
    add : (num1,num2) => num1 + num2 ,
    isNull : () => null ,
    checkVal : x => x,
    user : (f,l) => {
        
        const user = {
            "first" : f,
            "last" : l
        }

        return user;
    },
    fetchUser : () => axios.get("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.data)
    .catch(err => "error")

};
module.exports = functions;