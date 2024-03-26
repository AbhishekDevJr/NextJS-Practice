export default function AuthLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <h2>Auth-Layout Header</h2>
            {children}
        </>
    );
}