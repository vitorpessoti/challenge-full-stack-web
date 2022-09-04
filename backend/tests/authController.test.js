const supertest = require('supertest');
const createServer = require('../src/server');
const app = createServer();
const userMock = require('./__mocks__/users');
const db = require('../database/index');

beforeAll(async () => {
    await db.sync();
});

afterAll(async () => {
    await db.close();
})

describe('POST /auth/login', () => {
    describe('# login made successfully', () => {
        it('should return if the user login was made successfully', async () => {
            const response = await supertest(app)
                .post('/auth/login')
                .send(userMock.correctUser)
                .set('Accept', 'application/json')
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(200);
            expect(response.body.name).toEqual('Administrador');
        });
    });

    describe('# request sent without body', () => {
        it('should return the handled error', async () => {
            const response = await supertest(app)
                .post('/auth/login')
                .set('Accept', 'application/json')
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(400);
        });
    });

    describe('# username or password incorrect', () => {
        it('should return the handled response and statusCode unauthorized', async () => {
            const response = await supertest(app)
                .post('/auth/login')
                .send(userMock.wrongUser)
                .set('Accept', 'application/json')
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(401);
        });
    })
});

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibG9naW4iOiJhZG1AY2hhbGxlbmdlLmZ1bGxzdGFjay5jb20iLCJuYW1lIjoiQWRtaW5pc3RyYWRvciIsImlhdCI6MTY2MjI0ODk2NywiZXhwIjoxNjYyMjkyMTY3LCJzdWNjZXNzIjp0cnVlLCJzdGF0dXMiOnRydWV9.81s1VKWGtJ1CnPSwLtuFBMIC4SbBihzqJDFVCcSWDUM