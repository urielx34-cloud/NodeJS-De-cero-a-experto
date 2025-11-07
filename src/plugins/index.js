const {getUUID } = require('../plugins/get-id-plugin'); // patron adapatador
const { getAge } = require('../plugins/get-age-plugin'); 
const {httpClientPlugin} =  require('../plugins/http-client.plugin')
const buildLogger = require('../plugins/logger.plugin');

module.exports = {
    getUUID,
    getAge,
    httpClientPlugin,
    buildLogger,
}