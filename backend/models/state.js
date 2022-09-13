import mongoose from "mongoose";
const { Schema, model } = mongoose

const stateSchema = new Schema({
    _id: {
      type: Number
    },
    name: {
      type: String
    },
    cities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'City'
      }
    ],
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country'
    }
  });
  
  export default model("State", stateSchema);