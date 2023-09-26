import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try {
    const userID = await getDataFromToken (request);

    } catch (error:any) {
        return NextResponse.json
    }
}


