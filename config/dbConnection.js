const mongo = require('mongodb');

const connMongoDB = function(){

    console.log('Entrou na funcao de conexao.');
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}