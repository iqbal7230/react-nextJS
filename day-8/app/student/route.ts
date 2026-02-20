import { NextRequest, NextResponse } from "next/server";
import { students } from "../../data/data";

export async function GET(req:NextRequest) {
    return NextResponse.json(students);
}