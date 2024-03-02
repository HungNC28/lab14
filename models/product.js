const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Product", productSchema);

// const mongodb = require("mongodb");

// const getDb = require("../util/database").getDb;

// class Product {
//   constructor(title, price, description, imageUrl, id, userId) {
//     this.title = title;
//     this.price = price;
//     this.description = description;
//     this.imageUrl = imageUrl;
//     this._id = id ? new mongodb.ObjectId(id) : null;
//     this.userId = userId;
//   }
//   save() {
//     const db = getDb();
//     let dbOp;
//     if (this._id) {
//       console.log("Có Id");
//       dbOp = db.collection("product").updateOne(
//         { _id: this._id },
//         {
//           $set: {
//             title: this.title,
//             price: this.price,
//             description: this.description,
//             imageUrl: this.imageUrl,
//           },
//         }
//       );
//     } else {
//       console.log("Không có Id");
//       dbOp = db.collection("product").insertOne(this);
//     }
//     return dbOp
//       .then((result) => {
//         console.log("result:", result);
//       })
//       .catch((err) => console.log(err));
//   }
//   static fetchAll() {
//     const db = getDb();
//     return db
//       .collection("product")
//       .find()
//       .toArray()
//       .then((products) => {
//         console.log(products);
//         return products;
//       })
//       .catch((err) => console.log(err));
//   }

//   static findById(prodId) {
//     const db = getDb();
//     return db
//       .collection("product")
//       .find({ _id: new mongodb.ObjectId(prodId) })
//       .next()
//       .then((product) => {
//         return product;
//       })
//       .catch((err) => console.log(err));
//   }

//   static deleteById(prodId) {
//     const db = getDb();
//     return db
//       .collection("product")
//       .deleteOne({ _id: new mongodb.ObjectId(prodId) })
//       .then((result) => {
//         console.log("Delete");
//       })
//       .catch((err) => console.log(err));
//   }
// }

// module.exports = Product;
