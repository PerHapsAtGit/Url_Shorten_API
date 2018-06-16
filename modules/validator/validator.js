/**
 * Simple regex for URL check
 * @param {string} url 
 * @return {boolean}
 */
function validateUrl(url) {
    const regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return regex.test(url);
}

module.exports = validateUrl;