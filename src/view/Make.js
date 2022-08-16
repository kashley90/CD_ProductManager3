import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";

const Make = (props) => {
    const [productList, setProductList] = useState([]);

    return (
        <div>
                <CreateProduct
                productList={productList}
                setProductList={setProductList}
            />
        </div>
    );
};

export default Make;