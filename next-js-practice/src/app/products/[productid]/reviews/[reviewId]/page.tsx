import { notFound } from "next/navigation";

export default function ProductReview({ params }: {
    params: {
        productid: string,
        reviewId: string
    }
}) {
    if (Number(params.reviewId) > 1000) {
        notFound();
    }

    if (Math.floor(Math.random() * 2) === 1) {
        throw new Error('New Error!');
    }

    return (
        <div className=''>
            Review {params.reviewId} of Product: {params.productid}
        </div>
    );
}