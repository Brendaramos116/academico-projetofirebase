const disciplinaValidator = {
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

    curso: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 1,
            message: 'O número mínimo é 3'
        },
        maxLength: {
            value: 20,
            message: 'O número máximo é 10'
        }
    }
}
export default disciplinaValidator