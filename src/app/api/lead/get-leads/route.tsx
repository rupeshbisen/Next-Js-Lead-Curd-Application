import connectToDB from "@/database";
import Lead from "@/models/lead.model";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";
export async function GET(req: Request) {
    await connectToDB();

    try {
        const allLeads = await Lead.find({}).sort({ createdAt: -1 });

        if (allLeads) {
            return NextResponse.json({
                success: true,
                status: 200,
                data: allLeads,
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
            message: 'Failed to Get Lead. Please try again.',
        });
    }

}