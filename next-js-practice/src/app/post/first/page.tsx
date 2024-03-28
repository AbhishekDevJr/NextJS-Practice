import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'First Post',
    description: 'Description about 1st Post'
}

export default function First() {
    return (
        <div className=''>
            First Post Component
        </div>
    );
}