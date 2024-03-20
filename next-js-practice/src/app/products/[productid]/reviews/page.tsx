export default function Reviews({ params }: {
    params: {
        productid: string
    }
}) {
    return (
        <div className=''>
            <h1>Review List of Product: {params.productid}</h1>
            <ul>
                <li>Review 1...</li>
                <li>Review n</li>
            </ul>
        </div>
    );
}