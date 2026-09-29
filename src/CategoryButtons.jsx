function CategoryButtons({ category, setCategory }) {

  return (

    <div className="categories">

      <button
        className={category === "all" ? "active" : ""}
        onClick={() => setCategory("all")}
      >
        All
      </button>

      <button
        className={category === "Shoes" ? "active" : ""}
        onClick={() => setCategory("Shoes")}
      >
        Shoes
      </button>

      <button
        className={category === "Clothing" ? "active" : ""}
        onClick={() => setCategory("Clothing")}
      >
        Clothing
      </button>

      <button
        className={category === "Electronics" ? "active" : ""}
        onClick={() => setCategory("Electronics")}
      >
        Electronics
      </button>

      <button
        className={category === "Accessories" ? "active" : ""}
        onClick={() => setCategory("Accessories")}
      >
        Accessories
      </button>

    </div>

  );
}

export default CategoryButtons;