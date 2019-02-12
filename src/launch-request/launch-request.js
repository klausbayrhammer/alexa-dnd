module.exports = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  async handle(handlerInput) {
    return handlerInput.responseBuilder.speak('Hello').withShouldEndSession(false).getResponse();
  },
};
