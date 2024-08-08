import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        mobilenumber: Number,
        product: String,
    },
    {
        timestamps: true
    }
);

const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

export default Lead;