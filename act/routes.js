  const express = require("express")
  const usersRouter = require("../routes/users");
  



  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({}));



  const VERSION = "/api/v1/dx";

  app.use(`${VERSION}/users`, usersRouter);
  //app.use(`${version}/authens`, authensRouter);
