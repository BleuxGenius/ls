// testing 

const request = require('supertest');
const server = require('../api/server.js');


describe('cohorts router', function() {
    it('should run the tests', function(){
        expect(true).toBe(true); //insertionn expect(true)
        // .toBe(true) is a matcher
    })
    describe('GET /', function() {
        it('should return 200 ok' ,function(){
            return request(server).get('/api/cohorts').then(res => {
                expect(res.status).toBe(200);
            });
        });
        it('should return cohorts as the router value', function() {
            return request(server).get('/api/cohorts').then(res => {
                expect(res.body.router).toBe('cohorts')
            });
        });

        it('should return cohorts as the router value (async version)', async function() {
            const res = await request(server).get('/api/cohorts');

                expect(res.body.router).toBe('cohorts')
            })
    })

    // it('should return JSON formatted body', function() {

    // }

    if('should return an array of cohorts (async version', async function() {
        const res = await request(server).get('/api/cohorts');

        expect(Array.isArray(res.body)).toBe(true);
    })
})