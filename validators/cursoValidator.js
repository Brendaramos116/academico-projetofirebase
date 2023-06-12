const cursoValidator = {

    nome: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 3,
            message: 'O número mínimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'O número máximo é 10'
        }
    },

    duracao: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 2,
            message: 'O número mínimo são 2 caracteres!'
        },
        min: {
            value: 2.5,
            message: 'O valor mínimo é 2.5'
        },
        max: {
            value: 'O valor máximo é 10'
        },
        maxLength: {
            value: 3,
            message: 'O máximo são 3 caracteres'
        }

    },

    modalidade: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 3,
            message: 'O mínimo são 3 caracteres'
        }
    }

}

export default cursoValidator