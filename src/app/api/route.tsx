export function GET(request: Request) {
  console.log(request);

  // return Response.json();
  return new Response("Hello!");
}

// export function POST(request) {
//   return request.json({
//     message: "POST request to the API",
//   });
// }
