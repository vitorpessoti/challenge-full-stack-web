require('dotenv').config();

const bearerMock = process.env.MOCK_TOKEN;

const correctStudentToInsert = {
    name: 'Marina Miranda',
    email: 'marina@alunos.challenge.fullstack.com',
    cpf: '123.222.222-22'
};

const wrongStudentToInsert = {
    nome: 'Paula Souza',
    email: 'paula@alunos.challenge.fullstack.com',
    cpf: '111.111.222-22'
};

const correctStudentToUpdate = {
    ra: 1,
    name: 'Paula Souza',
    email: 'paula@alunos.challenge.fullstack.com',
    cpf: '111.111.222-12'
};

const wrongStudentToUpdate = {
    ra: 1,
    nome: 'Paula Souza',
    email: 'paula@alunos.challenge.fullstack.com',
    cpf: '111.111.222-22'
};

module.exports = {
    bearerMock,
    correctStudentToInsert,
    wrongStudentToInsert,
    correctStudentToUpdate,
    wrongStudentToUpdate
}