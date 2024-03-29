import Link from "next/link";

export default function Notification() {
    return (
        <>
            <h1>Notification Component</h1>
            <Link href='/complex-dashboard/archived'>Archived Notifications</Link>
        </>
    );
}