export default function ComplexDashboard({
    children,
    useranalytic,
    revenue,
    notification
}: {
    children: React.ReactNode,
    useranalytic: React.ReactNode,
    revenue: React.ReactNode,
    notification: React.ReactNode

}) {
    return (
        <>
            <div>{children}</div>

            <div className='container-dashboard' style={{ display: 'flex', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    <div style={{ minHeight: '400px', boxShadow: '5px 5px 5px 5px #00000030' }}>{useranalytic}</div>
                    <div style={{ minHeight: '400px', boxShadow: '5px 5px 5px 5px #00000030' }}>{revenue}</div>
                </div>
                <div style={{ minHeight: '400px', boxShadow: '5px 5px 5px 5px #00000030' }}>
                    {notification}
                </div>
            </div>
        </>
    );
}