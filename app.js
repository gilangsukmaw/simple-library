require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  }); 
  // Config environment

  const express = require("express"); // Import express
  const app = express(); // Make express app

  /* Import routes */
  const healthRouter = require("./router/health");
  

  /* Import errorHandler */
    const errorHandler = require("./middlewares/errorHandler");
  
  app.use(express.json()); // Enables req.body (JSON)
  
  app.use(
    express.urlencoded({
      extended: true,
    })
  );

  /* Write routes here */
  app.use("/health", healthRouter);


  /* If route not found */
  app.all("*", (req, res, next) => {
    try {
      next({ message: "Endpoint not found", statusCode: 404 });
    } catch (error) {
      next(error);
    }
  });


  /* Use error handler */
    app.use(errorHandler);


  /* Run the server */
  app.listen(4000, () => console.log(`Server running on 4000`));