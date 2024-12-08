import express from "express";
import * as tutorials from "../tutorial.controller.js";

export default (app) => {
  const router = express.Router();

  router.post("/", tutorials.create);
  router.get("/", tutorials.readAll);
  router.get("/published", tutorials.readAllPublished);
  router.get("/:id", tutorials.readOne);
  router.put("/:id", tutorials.update);
  router.delete("/:id", tutorials.deleteOne);
  router.delete("/", tutorials.deleteAll);
  // Bind the router to the path
  app.use("/api/tutorials", router);
};
