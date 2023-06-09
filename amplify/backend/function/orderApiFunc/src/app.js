/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_DBPETORDER_ARN
	STORAGE_DBPETORDER_NAME
	STORAGE_DBPETORDER_STREAMARN
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = process.env.STORAGE_DBPETORDER_NAME

function id() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/****************************
* Example post method *
****************************/

app.post('/orders', function (req, res) {
  const item = {
    orderId: id(),
    custId: req.body.custId,
    custName: req.body.custName,
    custPhone: req.body.custPhone,
    paymentMode: req.body.paymentMode,
    cart: req.body.cart,
    address: req.body.address,
    paymentId: req.body.paymentId
  };
  const params = {
    TableName: table,
    Item: item
  };

  dynamodb.put(params, function (err, data) {
    if (err) {
      res.json({ err });
    } else {
      res.json({ success: "Successfully Created" });
    }
  });
});

/****************************
* Example get method *
****************************/

app.get('/orders', function (req, res) {
  const params = {
    TableName: table
  };

  dynamodb.scan(params, function (err, data) {
    if (err) {
      res.status(500).json({ message: 'Failed to retrieve contacts' });
    } else {
      res.json(data.Items);
    }
  });
});

/****************************
* Example delete method *
*****************************/

app.delete('/orders/:orderId', function (req, res) {
  const orderId = req.params.orderId;

  const params = {
    TableName: table,
    Key: {
      orderId: orderId
    }
  };

  dynamodb.delete(params, function (err, data) {
    if (err) {
      res.status(500).json({ message: 'Failed to delete the order' });
    } else {
      res.json({ message: 'Order deleted successfully' });
    }
  });
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
