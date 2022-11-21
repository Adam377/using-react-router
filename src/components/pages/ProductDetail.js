import { useParams } from "react-router-dom/";

const ProductDetail = () => {
    const params = useParams();
    console.log(params.productID);

    return(
        <section>
            <div>Product Detail</div>
            <p>{params.productID}</p>
        </section>
    );
};

export default ProductDetail;