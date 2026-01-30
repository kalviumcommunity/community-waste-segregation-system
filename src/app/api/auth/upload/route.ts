import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "@/lib/s3";
import { successResponse, errorResponse } from "../../../../lib/apiResponse";


export async function POST(request: Request) {
try {
const formData = await request.formData();
const file = formData.get("file") as File;


if (!file) {
return errorResponse("No file provided", 400);
}


const buffer = Buffer.from(await file.arrayBuffer());


const command = new PutObjectCommand({
Bucket: process.env.AWS_S3_BUCKET_NAME!,
Key: `${Date.now()}-${file.name}`,
Body: buffer,
ContentType: file.type,
});


await s3.send(command);


return successResponse({ fileName: file.name }, "File uploaded successfully", 201);
} catch (error) {
return errorResponse("File upload failed", 500, error);
}
}