import redis from "./redisClient.js";

async function init() {
    //   const result = await redis.lpush("queue","from node");
    const result = await redis.rpop("queue");
  console.log(result);
}
init();
