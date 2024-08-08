import connectToDB from "@/database";
import Lead from "@/models/lead.model";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"

export async function DELETE(req: Request) {
    try {
        await connectToDB();

        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        const deletedLead = await Lead.findByIdAndDelete(id);

        if (deletedLead) {
            return NextResponse.json({
                success: true,
                message: "Lead deleted successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                status: 400,
                message: "Failed to delete Lead ! Plaese try again later",
            })
        }
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            status: 500,
            message: "Somthing went wrong ! Plaese try again later",
        })
    }
}