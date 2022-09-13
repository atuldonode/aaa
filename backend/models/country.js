import mongoose from "mongoose";
const { Schema, model } = mongoose;

const countrySchema = new Schema({
    _id: {
      type: Number
    },
    sortname: {
      type: String
    },
    name: {
      type: String
    },
    states: [
      {
        type: Schema.Types.ObjectId,
        ref: 'State'
      }
    ]
  });

  export default model("Country", countrySchema);