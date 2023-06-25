import mongoose from "mongoose";
mongoose.connect("mongodb://admin:secret@localhost:27017/?authSource=admin/ecomm");

let db = mongoose.connection;

export default db;