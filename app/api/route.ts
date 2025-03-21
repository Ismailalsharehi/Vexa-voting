import { NextRequest } from "next/server";
import { Comment } from "./comments/data";

export async function  GET(request: NextRequest){
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query? Comment.filter((Comment)=>Comment.text.includes(query)): Comment;
  return Response.json(filteredComments);
}

export async function POST(request: Request){

  const comment = await request.json();
  const newComment = {
    id: Comment.length+1,
    text: comment.text,
  };
  Comment.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers:{ "Content-Type": "application/json"},
    status: 201,
  });
}