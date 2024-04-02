import { NextRequest } from "next/server";
import { comments } from "./comments";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filteredComments = query ? comments.filter(item => item.comments.includes(query)) : comments;
    return Response.json(filteredComments);
}

export async function POST(req: Request) {
    const reqUp = await req.json();

    const newComment = {
        id: comments.length + 1,
        comments: reqUp.comment
    };

    comments.push(newComment);

    return new Response(JSON.stringify(comments), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201
    });
}