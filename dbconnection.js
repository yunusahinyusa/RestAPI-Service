const cassandra = require('cassandra-driver');
const config = require('./config.js');
let client = new cassandra.Client({ contactPoints: [config.cassandra.address], localDataCenter:'datacenter1', keyspace: config.cassandra.keyspace });

module.exports.getFromDB = async (itemID) => {
    console.log("itemid", itemID)
    let query = `SELECT * FROM meyve_stoku where item_id = '${itemID}';`;
    console.log("QUERY", query)
    return client.execute(query)
        .then((result) => {
            return result.rows;
        }).catch(function (err) {
            console.error('There was an error when connecting to cassandra', err);
            return client.shutdown();
        });
}