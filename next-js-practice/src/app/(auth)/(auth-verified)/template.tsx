'use client';
import Link from "next/link";
import { useState } from "react";

export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    const [userInput, setUserInput] = useState('');
    return (
        <>
            <input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <h2><Link href='/login'>Login</Link></h2>
            <h2><Link href='/register'>Register</Link></h2>
            <h2><Link href='/forgot-password'>Forgot-Password</Link></h2>
            <h2>Auth-Layout Header</h2>
            {children}
        </>
    );
}