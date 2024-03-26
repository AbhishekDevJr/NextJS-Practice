export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <>
            <h2>Product Layout Header</h2>
            {children}
        </>
    );
}