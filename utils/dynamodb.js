import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, QueryCommand, UpdateCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: process.env.AWS_REGION });
const db = DynamoDBDocumentClient.from(client);

const TABLE = process.env.DYNAMODB_TABLE;

export async function saveQuizResult({ userId, quizId, score, correctCount, totalQuestions }) {
  await db.send(new PutCommand({
    TableName: TABLE,
    Item: {
      userId,
      quizId,
      score,
      correctCount,
      totalQuestions,
      completedAt: new Date().toISOString(),
    },
  }));
}

export async function saveUser({ email, name, image }) {
  await db.send(new UpdateCommand({
    TableName: TABLE,
    Key: { userId: email, quizId: "PROFILE" },
    UpdateExpression: "SET #name = :name, #image = :image, #lastLogin = :lastLogin",
    ExpressionAttributeNames: {
      "#name": "name",
      "#image": "image",
      "#lastLogin": "lastLogin",
    },
    ExpressionAttributeValues: {
      ":name": name ?? "",
      ":image": image ?? "",
      ":lastLogin": new Date().toISOString(),
    },
  }));
}

export async function getUser(email) {
  const res = await db.send(new GetCommand({
    TableName: TABLE,
    Key: { userId: email, quizId: "PROFILE" },
  }));
  return res.Item ?? null;
}

export async function getUserResults(userId) {
  const res = await db.send(new QueryCommand({
    TableName: TABLE,
    KeyConditionExpression: "userId = :uid",
    ExpressionAttributeValues: { ":uid": userId },
  }));
  return res.Items ?? [];
}
