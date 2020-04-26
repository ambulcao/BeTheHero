const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index (request, response) {                            //criacao de rotas para listar todas as ongs no meu banco de dados
        const ongs = await connection('ongs').select('*');       //listar todas as tabelas

        return response.json(ongs);
    },

    async create(request, response) {                            //rota create para o banco de dados
        const {
            name,
            email,
            whatsapp,
            cidade,
            uf
        } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf,
        })

        return response.json({
            id
        });
        }
};