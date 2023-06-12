const salaValidator = {
    nome: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 1,
            message: 'O número mínimo é 3'
        },
        maxLength: {
            value: 20,
            message: 'O número máximo é 10'
        }
    },

    capacidade: {
        required: 'O campo é obrigatório!',
  
    },

    tipo: {
        required: 'O campo é obrigatório!',  

        minLength: {
            value: 1,
            message: 'O número mínimo é 1'
        },
        maxLength: {
            value: 20,
            message: 'O número máximo é 10'
        }
    }
}