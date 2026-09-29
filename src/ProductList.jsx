import ProductItem from "./ProductItem";

function ProductList({ products, addToCart }) {

  return (

    <div className="products">

      <h2>Products</h2>

      {products.length === 0 ? (

        <p className="empty-message">
          No products found.
        </p>

      ) : (

        products.map((product) => {

          return (

            <ProductItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />

          );

        })

      )}

    </div>

  );
}

export default ProductList;