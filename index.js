const express = require("express");

const app = express();

app.listen(3000, () => {
    console.info("Server running on port %d", 3000);
});

app.use(function (req,res,next) {
    console.log("j'ai été appelé !");
    next("coucou");
});

app.use(function(err,req,res,next) {
    const code = Math.random() < 0.5 ? 502 : 200;
    console.log(code);
    res.status(code).json({value:"nope yohann !"});
});
