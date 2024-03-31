import { comments } from "../comments";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const comment = comments.find((item) => item.id === Number(params.id));
    return Response.json(comment);
}