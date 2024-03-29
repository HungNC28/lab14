const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const errorController = require("./controllers/error");

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    User.findById("65bb1abe22e277f243b50269")
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
    .connect(
        "mongodb+srv://hungnc:Grhd411JftnN4dmP@cluster0.udsdb9i.mongodb.net/shop?retryWrites=true&w=majority"
    )
    .then((result) => {
        console.log("kết nối thành công");
        User.findOne().then((user) => {
            if (!user) {
                const user = new User({
                    name: "Max",
                    email: "max@test.com",
                    cart: {
                        items: [],
                    },
                });
                user.save();
            }
        });
        app.listen(3000);
    })
    .catch((err) => {
        console.log("kết nối thất bại");
        console.log(err);
    });
