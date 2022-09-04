const Student = require('../models/student');

const index = async (req, res) => {
    const students = await Student.findAll();

    return res.status(200).json({
        status: true,
        message: students.length > 0 ? 'Listagem de alunos recuperada com sucesso.' : 'Nenhum aluno cadastrado.',
        item: students
    });
}

const store = async (req, res) => {
    const { name, email, cpf } = req.body;

    try {
        const student = await Student.create({ name, email, cpf })

        return res.status(201).json({
            status: true,
            message: 'Aluno adicionado com sucesso.',
            item: student
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Houve um problema ao adicionar o aluno.',
            item: error.name
        });
    }
}

const update = async (req, res) => {
    const { name, email, cpf } = req.body;
    const student = await Student.findByPk(req.params.ra);

    if (!student) {
        return res.status(404).json({
            status: false,
            message: "Aluno não encontrado."
        })
    }

    const upd = await Student.update({ name, email, cpf }, {
        where: {
            ra: req.params.ra
        }
    });

    if (upd > 0) {
        return res.status(200).json({
            status: true,
            message: 'Aluno alterado com sucesso.',
        });
    } else {
        return res.status(500).json({
            status: false,
            message: 'O aluno não foi alterado porque as informações estão incorretas.'
        });
    }
}

const destroy = async (req, res) => {
    const del = await Student.destroy({
        where: {
            ra: req.params.ra
        }
    });

    if (del > 0) {
        return res.status(200).json({
            status: true,
            message: 'Aluno excluído com sucesso.'
        });
    } else {
        return res.status(404).json({
            status: false,
            message: 'O aluno informado não existe.'
        });
    }
}

module.exports = {
    store: store,
    index: index,
    update: update,
    destroy: destroy
}