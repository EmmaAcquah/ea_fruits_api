require('dotenv').config(); // Needs to be on the top line
const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});