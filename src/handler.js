const Alexa = require('ask-sdk-core');
const LaunchRequest = require('./launch-request/launch-request');

const skillBuilder = Alexa.SkillBuilders.custom();

module.exports = (event, context, callback) => {
    return skillBuilder
        .addRequestHandlers(
            LaunchRequest
        )
        .lambda()(event, context, callback);
};
