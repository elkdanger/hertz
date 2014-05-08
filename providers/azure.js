var azure = require("azure");

var storageSettings = {
    account: "stevescodingblog",
    accessKey: "BftUruRjeCMbQHJF2/QLY7V/ak6QTQ9b7N2895eA6OnmI29qLf6vfbuL2iih+0fU4zdOOYfg/1DNrGovpUIqtA=="
};

var TSRepository = function (tableName) {

    this.tableName = tableName;

    this.tableService = azure.createTableService()
}

exports.tableStorage = {
    TSRepository: TSRepository
};
