export default function ProductDetail({ params }: {
    params: {
        productid: string
    }
}) {
    return (
        <div className=''>
            Product Details {params.productid} Component
        </div>
    );
}