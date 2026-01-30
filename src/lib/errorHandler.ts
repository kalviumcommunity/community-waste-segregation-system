import { NextResponse } from "next/server";


export function handleError(error: any) {
console.error(error);

return NextResponse.json(
{
success: false,
message: "Internal Server Errorr",
},
{ status: 500 }
);
}