import fastify from "fastify";
import swagger from "fastify-swagger";
import fs from "fs";
import cors from "fastify-cors";
import pingRoutes from "./routes/ping.routes";
import articleRoutes from "./routes/article.routes";

const app = fastify();

app.register(cors, {
  origin: "http://localhost:3000",
});

app.register(swagger, {
  routePrefix: "/openapi",
  openapi: {
    info: {
      title: "Backend",
      version: "0.1.0",
    },
  },
  exposeRoute: true,
});

// routes
app.register(pingRoutes);
app.register(articleRoutes);

app.listen(process.env.PORT ?? 8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`\x1b[32mServer listening at ${address}\x1b[0m`);

  const document = app.swagger();
  fs.writeFile("../frontend/openapi.json", JSON.stringify(document), () =>
    console.log("frontend/openapi.json successfully exported")
  );
});

export { app };
