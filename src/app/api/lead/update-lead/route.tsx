import connectToDB from "@/database";
import Lead from "@/models/lead.model";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    mobilenumber: Joi.number().required(),
    product: Joi.string().required(),
});

export const dynamic = "force-dynamic";
export async function PUT(req: Request) {
    await connectToDB();

    const { _id, name, email, mobilenumber, product } = await req.json();
    console.log("id..", _id)
    const { error } = schema.validate({ name, email, mobilenumber, product });

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {

        const obj = { name, email, mobilenumber, product };

        const updatedLead = await Lead.findByIdAndUpdate({ _id }, obj, { new: true });

        if (updatedLead) {
            return NextResponse.json({
                success: true,
                message: "Lead updated successfully",
            });
        } else {
            return NextResponse.json({
                success: false,
                status: 400,
                message: 'Lead can not updated !'
            });
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            status: 500,
            message: 'Failed to update Lead. Please try again.',
        });
    }

}