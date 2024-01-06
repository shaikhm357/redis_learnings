import redis from "./redisClient.js";

async function init() {
  const result = await redis.get("message:1");
  console.log(result);
}
init();
