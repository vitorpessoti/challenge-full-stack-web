const supertest = require('supertest');
const createServer = require('../src/server');
const app = createServer();
const studentsMock = require('./__mocks__/students');
const db = require('../database/index');

beforeAll(async () => {
    await db.sync();
});

afterAll(async () => {
    await db.close();
});

describe('GET /students', () => {
    describe('# bearer token not sent', () => {
        it('should return unauthorized', async () => {
            const response = await supertest(app)
                .get('/students')
    
            expect(response.status).toEqual(401);
        });
    });

    describe('# listing all students', () => {
        it('should return an array with all students', async () => {
            const response = await supertest(app)
                .get('/students')
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`);
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(200);
            expect(response.body.item.length).toBeGreaterThanOrEqual(0);
        });
    });
});

describe('POST /students', () => {
    describe('# bearer token not sent', () => {
        it('should return unauthorized', async () => {
            const response = await supertest(app)
                .post('/students')
                .send(studentsMock.correctStudentToInsert)
                .set('Accept', 'application/json');
    
            expect(response.status).toEqual(401);
        });
    });

    describe('# creating a new student', () => {
        it('should return an object containing the created student', async () => {
            const response = await supertest(app)
                .post('/students')
                .send(studentsMock.correctStudentToInsert)
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`)
                .set('Accept', 'application/json');
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(201);
            expect(response.body.item.ra).toBeGreaterThanOrEqual(0);
        });
    });

    describe('# creating a new student with wrong attributes', () => {
        it('should return an error object', async () => {
            const response = await supertest(app)
                .post('/students')
                .send(studentsMock.wrongStudent)
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`)
                .set('Accept', 'application/json');
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(500);
            expect(response.body.status).toBeFalsy();
        });
    });
});

describe('PUT /students/:ra', () => {
    describe('# bearer token not sent', () => {
        it('should return unauthorized', async () => {
            const response = await supertest(app)
                .put(`/students/${studentsMock.correctStudentToUpdate.ra}`)
                .send(studentsMock.correctStudentToInsert)
                .set('Accept', 'application/json');
    
            expect(response.status).toEqual(401);
        });
    });

    describe('# updating a student', () => {
        it('should return an object containing the updated student', async () => {
            const response = await supertest(app)
                .put(`/students/${studentsMock.correctStudentToUpdate.ra}`)
                .send(studentsMock.correctStudentToUpdate)
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`)
                .set('Accept', 'application/json');
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(200);
        });
    });

    describe('# updating a new student with wrong attributes', () => {
        it('should return an error object', async () => {
            const response = await supertest(app)
                .put(`/students/${studentsMock.wrongStudentToUpdate.ra}`)
                .send(studentsMock.wrongStudent)
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`)
                .set('Accept', 'application/json');
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(500);
            expect(response.body.status).toBeFalsy();
        });
    });

    describe('# updating a nonexistent student', () => {
        it('should return an error object', async () => {
            const response = await supertest(app)
                .put(`/students/999999`)
                .send(studentsMock.wrongStudent)
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`)
                .set('Accept', 'application/json');
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(404);
            expect(response.body.status).toBeFalsy();
        });
    });
});

describe('DELETE /students/:ra', () => {
    describe('# bearer token not sent', () => {
        it('should return unauthorized', async () => {
            const response = await supertest(app)
                .delete(`/students/19`)
                .send(studentsMock.correctStudentToInsert)
                .set('Accept', 'application/json');
    
            expect(response.status).toEqual(401);
        });
    });

    describe('# deleting a student', () => {
        it('should return if the student has been deleted', async () => {
            const response = await supertest(app)
                .delete(`/students/19`)
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`)
                .set('Accept', 'application/json');
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(200);
        });
    });

    describe('# deleting a nonexistent student', () => {
        it('should return an error object', async () => {
            const response = await supertest(app)
                .put(`/students/999999`)
                .set('Authorization', `Bearer ${studentsMock.bearerMock}`)
                .set('Accept', 'application/json');
    
            expect(response.headers['content-type']).toMatch(/json/);
            expect(response.status).toEqual(404);
            expect(response.body.status).toBeFalsy();
        });
    });
});