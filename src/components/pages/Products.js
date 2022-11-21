import { Link } from "react-router-dom";

const Products = () => {
    return(
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li><Link to="/products/p1">TSC Wibble</Link></li>
                <li><Link to="/products/p2">TSW3 Wibble</Link></li>
                <li><Link to="/products/p3">Tree Wibble</Link></li>
            </ul>
        </section>
    );
};

export default Products;