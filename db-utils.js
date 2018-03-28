const MongoClient = require('mongodb').MongoClient;

/**
 *
 */
const dropDatabase = (url, databaseName) => {
    MongoClient.connect(url, function(err, client) {
        if (err) {
            throw err;
        }
        console.log("Connected successfully to server");
        let db = client.db(databaseName);
        db.dropDatabase(function(err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Operation success');
                client.close();
            };

        });

    });
};

module.exports.dropDatabase = dropDatabase;
