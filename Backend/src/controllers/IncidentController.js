const connection = require('../database/connection'); //importar a conexao com o banco de dados

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;  //criacao da paginacao para retornar a paginacao designada

        const [count] = await connection('incidents')   //query que retorna a quantidade total de casos registrados
        .count();

        const incidents = await connection('incidents') //todos os dados do incidente
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')    //relacionando e buscando dados de outras tabelas
        .limit(5)  //com a paginacao criada, vai me retornar somente 5 incidentes por paginacao
        .offset((page - 1) * 5)  //vou pular 5 registros por pagina
        .select([
            'incidents.*', 
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.cidade', 
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']);  //retorno da quantidade de casos no cabecalho da minha paginacao

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;  //corpo da nossas informacoes
        const ong_id = request.headers.authorization; //guarda informacoes do contexto da nossa requisicao
    
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;  //verifica se o ong_id realmente foi criado para ser deletado

        const incident = await connection('incidents')
        .where('id', id)  //procurar o incidente especifico
        .select('ong_id')  //selecionar somente a coluna id
        .first();  //me retorna somente 1 resultado
        if (incident.ong_id !== ong_id) {   //verificacao se aquele id pertence a devida ong
            return response.status(401).json({ error: 'Operation not permitted.' });  //Status 401
        }
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();  //status 204, nao tem conteudo
    }
};