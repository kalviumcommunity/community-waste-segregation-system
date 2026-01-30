export function successResponse(data: any, message = "Success", status = 200) {
  return new Response(JSON.stringify({ success: true, message, data }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export function errorResponse(message = "Error", status = 500, error?: any) {
  return new Response(JSON.stringify({ success: false, message, error }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}