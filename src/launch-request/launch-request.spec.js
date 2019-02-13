const expect = require('expect');
const sinon = require('sinon');
const {canHandle, handle} = require('./launch-request');

function createHandlerInput() {
    const speak = sinon.stub();
    const getResponse = sinon.stub();
    const withShouldEndSession = sinon.stub();
    const handlerInput = {
        responseBuilder: {speak, getResponse, withShouldEndSession}
    };
    speak.returns(handlerInput.responseBuilder);
    withShouldEndSession.returns(handlerInput.responseBuilder);
    getResponse.returns(handlerInput.responseBuilder);
    return handlerInput;
}


describe('launch request handler', () => {
    describe('canHandle', () => {
        it('can handle launch requests', () => {
            expect(canHandle({requestEnvelope: {request: {type: 'LaunchRequest'}}})).toEqual(true);
        });
        it('cannot handle other requests', () => {
            expect(canHandle({requestEnvelope: {request: {type: 'OtherRequest'}}})).toEqual(false);
        });
    });
    describe('handle', () => {
        it('outputs text on launch requests', async () => {
            const handlerInput = createHandlerInput();
            await handle(handlerInput);
            sinon.assert.calledWith(handlerInput.responseBuilder.speak, 'Hello');
            sinon.assert.called(handlerInput.responseBuilder.getResponse);
            sinon.assert.calledWith(handlerInput.responseBuilder.withShouldEndSession, false);
        });
    });
});
