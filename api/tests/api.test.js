const request = require('supertest')
const app = require('../src/index')

//LOCATION TESTS
describe('Location tests', () =>{
    it('respond with json containing current location', done => {
        request(app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})



//TESTING CURRENT WEATHER
describe('Current weather fetch tets', () =>{
    it('respond with json containing current weather from specific location', done =>{
        request(app)
            .get('/v1/current/toronto')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    
    it('respond with an error if invalid location passed to weather fetch', done =>{
        request(app)
            .get('/v1/current/INVALIDLOCATION')
            .set('Accept', 'application/json')
            .expect(404)
            .expect('Not Found')
            .end(err => {
                if (err) return done(err)
                done()
            })
    })
    
    it('respond with json containing weather from current location', done =>{
        request(app)
            .get('/v1/current')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})

//TESTING FORECAST
describe('Forecast fetch tests', () => {
    it('respond with json containing forecast for specific location', done =>{
        request(app)
            .get('/v1/forecast/toronto')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    
    it('respond with an error if invalid lcoation passed to forecast fetch', done =>{
        request(app)
            .get('/v1/forecast/INVALIDLOCATION')
            .set('Accept', 'application/json')
            .expect(404)
            .expect('Not Found')
            .end(err => {
                if (err) return done(err)
                done()
            }
        )
    })
    
    it('respond with json containing forecast from current location', done => {
        request(app)
            .get('/v1/forecast')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
})
