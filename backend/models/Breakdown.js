const { Schema, model } = require("mongoose");

//The Breakdown That Needs to be Sent to the Umbrella For Raising Invoice

const BreakdownSchema = new Schema({

    //The Name of The Candidate Whose "BD" is Being Sent
    candidateName: {
        type: Schema.Types.ObjectId,
        ref: "Candidate",
        required: true
    },

    //To Which Umbrella the "BD" is Being Sent
    umbrella: {
        type: Schema.Types.ObjectId,
        ref: 'Umbrella',
        required: true,
      },


      //The Actual "BD"
    BreakdownHours: [{
        DayHrs: {
          type: Number,
          required: true
        },
        NightHrs: {
          type: Number,
          required: true
        },
        SundayHrs: {
          type: Number,
          required: true
        }
      }]


}, { timestamps: true });

module.exports = model("Breakdown", BreakdownSchema);
