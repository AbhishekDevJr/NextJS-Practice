import { redirect } from "next/navigation";
import { comments } from "../comments";

export async function GET(req: Request, { params }: { params: { id: string } }) {

    if (Number(params.id) > comments.length) {
        redirect('/api/user/comments');
    }

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

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const index = comments.findIndex(item => item.id === Number(params.id));
    const deletedComment = comments[index];
    comments.splice(index, 1);
    if (index !== -1) {
        return Response.json(deletedComment);
    }
    else {
        return new Response('No Data to Delete!');
    }
}