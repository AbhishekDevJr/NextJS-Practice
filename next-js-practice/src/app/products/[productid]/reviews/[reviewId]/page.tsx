export default function ProductReview({ params }: {
    params: {
        productid: string,
        reviewId: string
    }
}) {
    return (
        <div className=''>
            Review {params.reviewId} of Product: {params.productid}
        </div>
    );
}