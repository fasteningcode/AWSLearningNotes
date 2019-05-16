const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});

const docClient = new AWS.DynamoDB.DocumentClient();

// docClient.get({
//         TableName: 'td_notes',
//         Key: {
//             user_id: 'fgfgtretert',
//             timestamp: 1557808805
//         }
//     },
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(JSON.stringify(data, null, 2));
//         }
//     });
//
// docClient.query({
//         TableName: 'td_notes',
//         KeyConditionExpression: "user_id = :uid",
//         ExpressionAttributeValues: {
//             ":uid": "fgfdg"
//         }
//
//     },
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(JSON.stringify(data, null, 2));
//         }
//     });
//
// docClient.scan({
//         TableName: 'td_notes',
//         FilterExpression: "cat = :cat",
//         ExpressionAttributeValues: {
//             ":cat": "General "
//         }
//     },
//
//     (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(JSON.stringify(data, null, 2));
//         }
//     });


docClient.batchGet({
        RequestItems: {
            'td_notes': {
                Keys: [
                    {
                        user_id: 'fgfdg',
                        timestamp: 1557808722
                    },
                    {
                        user_id: 'fgfgtretert',
                        timestamp: 1557808805
                    }
                ]
            },
            'td_notes_sdk': {
                Keys: [
                   {
                       user_id : '2',
                       timestamp : 3433234
                   }
                ]
            }
        }
    },
    (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(JSON.stringify(data, null, 2));
        }
    });

