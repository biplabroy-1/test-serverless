import { connectToDatabase } from "./db.js";
import { Task } from "./Task.js";

async function main(args) {
    await connectToDatabase();
    const data = args.body || args || {
      title: "Task 1",
      done: false,
    };
  
    const task = await Task.create(data);
    return {
      statusCode: 200,
      body: task,
    };
}
