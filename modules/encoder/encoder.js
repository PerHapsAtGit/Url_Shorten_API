const atob = require('atob');
const btoa = require('btoa');

/**
 * Convert number to hash string
 * @param {number} num 
 * @return {string}
 */
function encode(num){
    return btoa(num);
}

/**
 * Decode string to number
 * @param {string} str 
 * @return {number}
 */
function decode(str){
    return Number(atob(str));
}

module.exports = {
    encode,
    decode
}