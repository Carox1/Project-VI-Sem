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
	STORAGE_DBPETPRODUCT_ARN
	STORAGE_DBPETPRODUCT_NAME
	STORAGE_DBPETPRODUCT_STREAMARN
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
const table = process.env.STORAGE_DBPETPRODUCT_NAME
async function getProduct(id) {
  const params = {
    TableName: table,
    Key: {
      id
    }
  };

  try {
    const data = await dynamodb.get(params).promise();
    if (!data.Item) {
      throw new Error(`Product with id ${id} not found in table`);
    }
    console.log(`Product with id ${id} found in table:`, data.Item);
    return data.Item;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to get product from table');
  }
}

async function getAllItems(category) {
  const params = {
    TableName: table
  };

  if (category) {
    params.FilterExpression = "category = :category";
    params.ExpressionAttributeValues = {
      ":category": category
    };
  }

  try {
    const data = await dynamodb.scan(params).promise();
    return data.Items;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to retrieve items from table');
  }
}

const id = () => {
  const currentDate = new Date();
  const datePart = currentDate.toISOString().slice(0, 10).replace(/-/g, '');
  const timePart = currentDate.toTimeString().slice(0, 8).replace(/:/g, '');
  const countPart = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  return `${datePart}${timePart}${countPart}`;
}

const timeStamp = () => {
  const date = new Date();
  const timestamp = date.getTime();
  return timestamp;
}

/****************************
* Example post method *
****************************/

app.post('/products', function (req, res) {
  const item = {
    id: id(),
    img: req.body.img,
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    category: req.body.category,
    vendor: req.body.vendor,
    color: req.body.color,
    weight: req.body.weight,
    dose: req.body.dose,
    age: req.body.age,
    inStock: true,
    isNew: true,
    createdAt: timeStamp()
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

/*****************************************
 * Get all products or based on category *
 ****************************************/

app.get('/products', async function (req, res) {
  const category = req.query.category;
  try {
    const items = await getAllItems(category);
    res.status(200).json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve products' });
  }
});

/*****************************************
 * Get single products                   *
 ****************************************/

app.get('/products/:id', async function (req, res) {
  try {
    const { id } = req.params;
    const product = await getProduct(id);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get product' });
  }
});

/****************************
* Example delete method *
*****************************/

app.delete('/products/:id', function (req, res) {
  const id = req.params.id;

  const params = {
    TableName: table,
    Key: {
      id: id
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

/****************************
* Example update method *
****************************/

app.put('/products/:id', function (req, res) {
  const id = req.params.id;
  const updatedAttributes = req.body;

  const params = {
    TableName: table,
    Key: {
      id: id
    },
    UpdateExpression: 'SET',
    ExpressionAttributeValues: {},
    ExpressionAttributeNames: {},
    ReturnValues: 'ALL_NEW'
  };

  // Construct the update expression and attribute values dynamically
  Object.keys(updatedAttributes).forEach((key, index) => {
    params.UpdateExpression += ` #${key} = :value${index},`;
    params.ExpressionAttributeValues[`:value${index}`] = updatedAttributes[key];
    params.ExpressionAttributeNames[`#${key}`] = key;
  });

  params.UpdateExpression = params.UpdateExpression.slice(0, -1); // Remove the trailing comma

  dynamodb.update(params, function (err, data) {
    if (err) {
      console.error('Unable to update item. Error JSON:', JSON.stringify(err, null, 2));
      res.status(500).json({ message: 'Failed to update the item' });
    } else {
      console.log('UpdateItem succeeded:', JSON.stringify(data, null, 2));
      res.json({ message: 'Item updated successfully' });
    }
  });
});


/*****************************************
 * API Gateway Information               *
 ****************************************/

app.listen(3000, function () {
  console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
