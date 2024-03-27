import { Metadata } from "next";

type Props = {
    params: {
        productid: string
    }
};

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product-ID: ${params.productid}`,
        description: `Product-Description: ${params.productid}`
    };
}

export default function ProductDetail({ params }: Props) {
    return (
        <div className=''>
            Product Details {params.productid} Component
        </div>
    );
}