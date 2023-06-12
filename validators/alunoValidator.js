const alunoValidator = {

    nome: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 1,
            message: 'O número mínimo é 1'
        },
        maxLength: {
            value: 20,
            message: 'O número máximo é 10'
        }
    },

    cpf: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 15,
            message: 'O número mínimo são 15 caracteres'
        },
        maxLength: {
            value: 15,
            message: 'O número máximo são 15 caracteres'
        }
    },
    
    matricula: {
        required: 'O campo é obrigatório!',
        minLength: {
            value: 3,
            message: 'O mínimo são 3 caracteres'
        }
    },

    email: {
        required: 'O campo é obrigatório!',

        maxLength: {
            value: 30,
            message: 'O número máximo são 30 caracteres'
        }
    },

    telefone: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 11,
            message: 'O número mínimo são 11 caracteres'
        },
        maxLength: {
            value: 11,
            message: 'O número máximo são 11 caracteres'
        }
     
    },

    cep: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 10,
            message: 'O número mínimo são 10 caracteres'
        },
        maxLength: {
            value: 10,
            message: 'O número máximo são 10 caracteres'
        }
    },

    endereco: {
        required: 'O campo é obrigatório!',

    }

}

export default alunoValidator