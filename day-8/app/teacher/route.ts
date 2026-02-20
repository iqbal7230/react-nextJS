import { NextRequest, NextResponse } from "next/server";
import { teachers } from "../../data/data";

export async function GET(req: NextRequest) {
    return NextResponse.json(teachers);
}   
