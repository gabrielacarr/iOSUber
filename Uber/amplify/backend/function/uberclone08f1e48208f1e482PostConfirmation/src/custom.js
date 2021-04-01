const aws = require('aws');
const ddb = new aws.DynamoDB();
exports.handler = async () => {
  if (!event.request.userAttributes.sub) {
    console.log('Error: No user was written to DynamoDB');
    context.done(null, event);
    return;
  }
  /*======= Save user to DynamoDB =======*/
  const date = new Date();

  const params = {
    Item: {
      id: {S: event.request.userAttributes.sub},
      __typename: {S: 'User'},
      username: {S: event.userName},
      email: {S: event.request.userAttributes.email},
      createdAt: {S: date.toISOString()},
      updatedAt: {S: date.toISOString()},
    },
    TableName: process.env.USERTABLE,
  };
  try {
    await ddb.putItem(params).promise();
    console.log('Success into DynamoDB');
  } catch (e) {
    console.log('Error:', e);
  }
  context.done(null, event);
};
