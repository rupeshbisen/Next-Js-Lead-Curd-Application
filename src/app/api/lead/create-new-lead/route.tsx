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
export async function POST(req: Request) {
    await connectToDB();

    const { name, email, mobilenumber, product } = await req.json();

    const { error } = schema.validate({ name, email, mobilenumber, product });

    if (error) {
        return NextResponse.json({
            success: false,
            message: error.details[0].message,
        });
    }

    try {
        const checkLead = await Lead.findOne({ email })
        if (checkLead) {
            return NextResponse.json({
                success: false,
                message: "Lead is already save with this email id ! Try with another email ",
            })
        }

        const newLead = await Lead.create({
            name,
            email,
            mobilenumber,
            product
        })

        if (newLead) {
            return NextResponse.json({
                success: true,
                status: 200,
                message: "Lead Added successfully !",
            });
        } else {
            return NextResponse.json({
                success: false,
                status: 400,
                message: "Something went wrong ! Please try again later",
            });
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            status: 500,
            message: 'Failed to Add Lead. Please try again.',
        });
    }

}