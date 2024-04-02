import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const requestHeaders = new Headers(req.headers);
    const headerList = headers();
    console.log('Way 1--->', requestHeaders.get('Authorization'));
    console.log('Way 2--->', headerList.get('Authorization'));

    return new Response('<h1>Profile API Data!</h1>', {
        headers: {
            'Content-Type': 'text/html',
        }
    });
}