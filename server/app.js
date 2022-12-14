const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const { DestinationRouter } = require("./routes");
const db = require("./db");
const axios = require('axios');
require("dotenv").config();

// render server side template
app.set("view engine", "ejs");
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  db.collection("destinations")
    .find()
    .toArray()
    .then((results) => {
      results.map((res, index) => {
        // helper props
        res.updateModalId = `modal-update-${res._id}`;
        res.deleteModalId = `modal-delete-${res._id}`;
        res.entityIndex = index;

        return res;
      });

      res.render("index.ejs", { destinations: results });
    })
    .catch((err) => res.render("Yo an errror occured", err));
});

//in progress 
app.get("/api/unsplash", (req, res) => {
  // const client_id = "9WZGfUCuR_LYgjZ-8CQJjk2AE0akdVou0MfHW1_jrn4";
  const client_id = process.env.CLIENT_ID;
  const searchStr = "coffee";
  const urlStr = `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`;
  // let data = [];
  const getCards = async () => {
    try {
        let response = await axios.get(urlStr, {
          headers: { "Accept-Encoding": "gzip,deflate,compress" },
        });
        res.json({ success: true, data: response.data });
    }catch (error) {
        console.log(error.message);
    }
};
  
  return getCards(); //return some data
})

app.use("/api", DestinationRouter);

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
