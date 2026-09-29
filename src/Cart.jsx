function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  totalItems,
  totalPrice
}) {

  return (

    <div className="cart">

      <div className="cart-heading">

        <div>
          <h2>Your Cart</h2>

          <p className="items-count">
            {totalItems} items
          </p>
        </div>

      </div>


      {cart.length === 0 ? (

        <p className="empty-cart">
          Your cart is empty.
        </p>

      ) : (

        cart.map((item) => {

          return (

            <div
              className="cart-item"
              key={item.id}
            >

              <div className="cart-image">
                🛍️
              </div>

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p className="category">
                  {item.category}
                </p>

                <p className="price">
                  ${item.price}
                </p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                ×
              </button>

            </div>

          );

        })

      )}


      <div className="summary">

        <div>
          <span>Subtotal</span>

          <span>
            ${totalPrice.toFixed(2)}
          </span>
        </div>


        <div>
          <span>Shipping & tax</span>

          <span>
            $5.00
          </span>
        </div>


        <hr />


        <div className="total">

          <span>Total</span>

          <span>
            ${(totalPrice + 5).toFixed(2)}
          </span>

        </div>


        <button className="checkout">
          Checkout Now
        </button>

      </div>

    </div>

  );
}

export default Cart;