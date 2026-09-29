function ProductItem({ product, addToCart }) {

  return (

    <div className="product-card">

      <div className="product-image">
        🛍️
      </div>

      <div className="product-info">

        <h3>{product.name}</h3>

        <p className="category">
          {product.category}
        </p>

        <p className="price">
          ${product.price}
        </p>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>

    </div>

  );
}

export default ProductItem;