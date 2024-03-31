import { comments } from "./comments";

export async function GET() {
    return Response.json(comments);
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