const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema ({
  userId: {
    type: String,
    required: true
  },
  destinationId: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  }
})

reservationSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Reservation", reservationSchema);