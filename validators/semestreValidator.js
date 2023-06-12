const semestreValidator = {
    semestre: {
        required: 'O campo é obrigatório!',

        minLength: {
            value: 1,
            message: 'O número mínimo é 3'
        },
        maxLength: {
            value: 2,
            message: 'O número máximo são 2'
        }
    },

    datai : {
        required: 'O campo é obrigatório!' 
    },

    dataf: {
        required: 'O campo é obrigatório!'
    }
}