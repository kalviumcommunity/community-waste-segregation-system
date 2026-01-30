import { NextResponse } from "next/server";


export function handleError(error: any) {
console.error(error);


return NextResponse.json(
{
success: false,
message: "Internal Server Error",
},
{ status: 500 }
);
}