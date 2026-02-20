import { NextRequest, NextResponse } from "next/server";

let userData: Record<string, any> = {};

export async function POST(req: NextRequest) {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;
    
    if (!username) {
        return NextResponse.json({ message: "Username is required to create a user" }, { status: 400 });
    }

    userData[username] = { username, email, password };
    console.log("Database state after POST:", userData);

    return NextResponse.json({ message: "User created successfully", user: userData[username] }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
    const reqBody = await req.json();
    const { username } = reqBody;

    if (!username || !userData[username]) {
        return NextResponse.json({ message: "User not found or username is missing" }, { status: 404 });
    }
    delete userData[username];
    console.log("Database state after DELETE:", userData);

    return NextResponse.json({ message: "User deleted successfully" }, { status: 200 });
}