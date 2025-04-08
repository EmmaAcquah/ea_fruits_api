const app = require("./app");
require('dotenv').config();
// const port = 3000; // Can remove port because it's included in .env as an environment variable

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});