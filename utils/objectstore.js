
const credsString = process.env.OBJECT_STORE_CREDS
const config = JSON.parse(credsString);
const Bucket = process.env.Bucket
let AWS
let cos 
if (process.env.AWS_ACCESS_KEY_ID) {
    AWS = require('aws-sdk');
    cos = new AWS.S3();
} else {
    AWS = require('ibm-cos-sdk');
    cos = new AWS.S3(config);
}

function doCreateBucket() {
    console.log('Creating bucket');
    return cos.createBucket({
        Bucket,
        CreateBucketConfiguration: {
          LocationConstraint: 'jp-tok'
        },
    }).promise();
}
 
function doCreateObject(key, body) {
    return cos.putObject({
        Bucket,
        Key: key,
        Body: body
    }).promise();
}
 
function doDeleteObject() {
    console.log('Deleting object');
    return cos.deleteObject({
        Bucket,
        Key: 'foo'
    }).promise();
}
 
function doDeleteBucket() {
    console.log('Deleting bucket');
    return cos.deleteBucket({
        Bucket
    }).promise();
}
 
// doCreateBucket()
//     .then(doCreateObject)
//     .then(doDeleteObject)
//     .then(doDeleteBucket)
//     .then(function() {
//         console.log('Finished!');
//     })
//     .catch(function(err) {
//         console.error('An error occurred:', err);
//     });
  
module.exports = { doCreateObject, doCreateBucket }