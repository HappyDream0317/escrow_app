const mongoose = require("mongoose");

const { Schema } = mongoose;

mongoose.connect(
    "mongodb+srv://yevhen31313:rQbcTNL15I6ywYnP@cluster0.i1tdmiy.mongodb.net/"
);
mongoose.Promise = global.Promise;

function userModel() {
    const schema = new Schema(
        {
            email: { type: String, required: true },
            name: { type: String, required: true },
            password: { type: String, required: true },
            mphone: { type: String, required: true },
            uphone: { type: String, required: true },
            status: { type: Boolean, required: true },
        },
        {
            // add createdAt and updatedAt timestamps
            timestamps: true,
        }
    );

    schema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform: function (doc, ret) {
            delete ret._id;
        },
    });

    return mongoose.models.User || mongoose.model("User", schema);
}

module.exports = {
    db: {
        User: userModel(),
    },
};
