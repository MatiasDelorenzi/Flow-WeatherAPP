const request = require('supertest')
const should = require('should')
const app = require('../src/index')




//TESTING CURRENT WEATHER
describe('Current weather fetch tets', () =>{
    it('respond with json containing current weather from specific location', done =>{
        request(app)
            .get('/v1/current/toronto')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if (err){
                    return done(err)
                }
                should(response.body.day).be.a.String()
                should(response.body.location).be.a.String()
                should(response.body.temp).be.a.String()
                should(response.body.min_temp).be.a.String()
                should(response.body.max_temp).be.a.String()
                should(response.body.main).be.a.String()
                should(response.body.iconUrl).be.a.String()
                done()
            })
    })
    
    it('respond with an error if invalid location passed to weather fetch', done =>{
        request(app)
            .get('/v1/current/INVALIDLOCATION')
            .set('Accept', 'application/json')
            .expect(404)
            .expect('Not Found')
            .end(err => {
                if (err){
                    return done(err)
                } 
                done()
            })
    })
    
    it('respond with json containing weather from current location', done =>{
        request(app)
            .get('/v1/current')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response)=>{
                if (err){
                    return done(err)
                }
                should(response.body.day).be.a.String()
                should(response.body.location).be.a.String()
                should(response.body.temp).be.a.String()
                should(response.body.min_temp).be.a.String()
                should(response.body.max_temp).be.a.String()
                should(response.body.main).be.a.String()
                should(response.body.iconUrl).be.a.String()
                done()
            })
    })
})

//TESTING FORECAST
describe('Forecast fetch tests', () => {
    it('respond with json containing forecast for specific location', done =>{
        request(app)
            .get('/v1/forecast/toronto')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, response) => {
                if (err){
                    return done(err)
                }
                should(response.body.location).be.a.String()
                should(response.body.day1).be.an.Object()
                should(response.body.day2).be.an.Object()
                should(response.body.day3).be.an.Object()
                should(response.body.day4).be.an.Object()
                should(response.body.day5).be.an.Object()
                done()

            })
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
            .expect(200)
            .end((err, response) => {
                if (err){
                    return done(err)
                }
                should(response.body.location).be.a.String()
                should(response.body.day1).be.an.Object()
                should(response.body.day2).be.an.Object()
                should(response.body.day3).be.an.Object()
                should(response.body.day4).be.an.Object()
                should(response.body.day5).be.an.Object()
                done()

            })
    })
})

//LOCATION TESTS
describe('Location test', () =>{
    it('Location returns an object with two strings', (done) =>{
        request(app)
            .get('/v1/location')
            .set('Accept', 'application/json')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, response) => {
                if (err){
                    return done(err)
                }
                should(response.body.city).be.a.String()
                should(response.body.country).be.a.String()
                done()
            })
    })
})



