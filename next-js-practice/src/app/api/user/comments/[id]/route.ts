import { comments } from "../comments";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((item) => item.id === Number(params.id));
    return Response.json(comment);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const reqUp = await req.json();
    const { text } = reqUp;
    const index = comments.findIndex(item => item.id === Number(params.id));
    comments[index].comments = text;
    return Response.json(comments[index]);
}