const app = require("./app.js");

const { PORT = 3000 } = process.env;

console.log(process.env);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
