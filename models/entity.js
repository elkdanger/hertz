/**
 * Configures entities with the properties and methods that they need to function
 */

exports.configure = function (o, partitionKey, rowKey) {

    if (o) {
        o.partitionKey = partitionKey;
        o.rowKey = rowKey;
    }

}