const container = require("./container");
const application = container.resolve("app");
application.start().then(async () =>{
    console.log("Aplicación corriendo");
}).catch((err) =>{
    console.log(err);
    process.exit();
})
