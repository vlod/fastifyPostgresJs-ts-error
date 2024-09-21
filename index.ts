import Fastify from "fastify";
import { fastifyPostgresJs } from "fastify-postgres-dot-js";

const fastify = Fastify({
  logger: true,
});

void fastify.register(fastifyPostgresJs);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
