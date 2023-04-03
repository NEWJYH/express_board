import app from "./app.js";
import  setupDb  from "./db/db-setup.js";

const port = 3000;

// db connection
setupDb();

app.listen(port, () => {
  console.log(`express_app listening on port ${port}`);
});
