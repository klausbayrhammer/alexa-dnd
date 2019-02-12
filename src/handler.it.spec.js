const handler = require('../src/handler');
const expect = require('expect');

describe('alexa dnd', function () {
    it('should handle the LaunchRequest', function (done) {
        const event = {
            version: '1.0',
            session: {},
            request: {
                locale: 'en-GB',
                type: 'LaunchRequest',
            },
        };
        handler(event, {}, (error, response) => {
            try {
                expect(response.response).toEqual({
                    outputSpeech: {
                        type: 'SSML',
                        ssml: '<speak>Hello</speak>',
                    },
                    shouldEndSession: false,
                });
                done();
            } catch (e) {
                done(e);
            }
        });

    });
});