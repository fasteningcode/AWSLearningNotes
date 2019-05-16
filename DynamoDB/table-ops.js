const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const dynamodb = new AWS.DynamoDB();

//list all the existing tables
dynamodb.listTables({}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});


// to get the description of a particular table
dynamodb.describeTable({TableName: "td_notes_sdk"},
    (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
});

//Create Table
dynamodb.createTable({
    TableName: "td_notes_sdk",
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        }, {
            AttributeName: "timestamp",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "user_id",
            KeyType: "HASH"
        }, {
            AttributeName: "timestamp",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }

}, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(JSON.stringify(data));
    }
})


//Update Table
dynamodb.updateTable({
    TableName : "td_notes_sdk",
    ProvisionedThroughput:{
        ReadCapacityUnits : 2,
        WriteCapacityUnits : 1
    }
}, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
})


//Delete Table
dynamodb.deleteTable({TableName: "td_notes_sdk"}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

