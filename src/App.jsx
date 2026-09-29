/*import { useState,useEffect } from "react";

/*import Search from "./Search"
import HabitForm from "./HabitForm";
import HabitItem from "./HabitItem";
import HabitButtons from "./habitButtons";

function App(){

const [habits,setHabit]=useState(()=>{
  return JSON.parse(localStorage.getItem("habits"))||[]
})

const [task,setTask]=useState("")
const [search,setSearch]=useState("")
const [filter,setFilter]=useState("all")

useEffect(()=> {
  localStorage.setItem("habits",JSON.stringify(habits))
},[habits])


function addHabit(){
if (!task.trim()) return

const newHabit={
id:Date.now(),
text:task,
completed:false
}

setHabit([...habits,newHabit]),
setTask("")
}


function delHabit(id){
setHabit(habits.filter((habit)=>habit.id !== id))
}

function toggHabit(id){
setHabit(habits.map((habit)=>habit.id === id
?{...habit,completed:!habit.completed}
:habit

))
}

const searchHabit=habits.filter((habit)=>{

return habit.text
.toLowerCase()
.includes(search.toLowerCase())

})

const filterHabit=searchHabit.filter((habit)=>{

if( filter==="active" ){
  return habit.completed === false
}

if( filter === "completed"){
  return habit.completed === true
}

return true;

})


const TotalHabit=habits.length

const completedHabit=habits.filter((habit)=>{
  return habit.completed===true
}).length

const activeHabit=habits.filter((habit)=>{
  return habit.completed===false
}).length



return(

<div>
<p>
<Search
search={search}
setSearch={setSearch}
/>
</p>

<p>
<HabitForm
task={task}
setTask={setTask}
addHabit={addHabit}
/>
</p>


<HabitButtons
filter={filter}
setFilter={setFilter}
/>

{filterHabit.map((habit)=>{

return(
<HabitItem
key={habit.id}
habit={habit}
toggHabit={toggHabit}
delHabit={delHabit}
/>
) })  
}

<p> 
 Total:{TotalHabit}
</p>

<p>
  Completed:{completedHabit}
</p>

<p>
 Active:{activeHabit}
</p>


</div>



)

}

export default App;*/

/*import { useStat,useEffect, useState } from "react";


function App(){

const [products,setProduct]=useState(()=>{
  return JSON.parse(localStorage.getItem("products"))
})

const [task,setTask]=useState("")
const [search,setSearch]=useState("")
const [price,setPrice]=useState("")
const [filter,setFilter]=useState("all")

useEffect(()=>{
localStorage.setItem("products",JSON.stringify(products))
},[products])


function addProduct(){
if (!task.trim()) return

const newProduct={
id:Date.now(),
text:task,
number:price
}

setProduct({...products,newProduct}),
setTask("")
}


function delProduct(id){
setProduct(products.filter((product)=>product.id !==id))
}


const searchProduct=products.filter((product)=>{
return product.text
.toLowerCase()
.includes(search.toLowerCase())

})


products.filter((product)=>{
return product.text
.includes(Number())

})





}*/


import { useState, useEffect } from "react";

import ProductList from "./ProductList";
import Cart from "./Cart";
import Search from "./Search";
import CategoryButtons from "./CategoryButtons";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Nike Shoes",
      price: 120,
      category: "Shoes"
    },
    {
      id: 2,
      name: "T-Shirt",
      price: 40,
      category: "Clothing"
    },
    {
      id: 3,
      name: "Headphones",
      price: 80,
      category: "Electronics"
    },
    {
      id: 4,
      name: "Watch",
      price: 100,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Jordan Shoes",
      price: 150,
      category: "Shoes"
    },
    {
      id: 6,
      name: "Hoodie",
      price: 70,
      category: "Clothing"
    }
  ];

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ]);
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  }

  const searchProducts = products.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  const filteredProducts = searchProducts.filter((product) => {
    if (category === "all") {
      return true;
    }

    return product.category === category;
  });

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">

      <header className="header">

        <button className="back-btn">
          ‹
        </button>

        <h1>Cart</h1>

        <button className="menu-btn">
          •••
        </button>

      </header>

      <Search
        search={search}
        setSearch={setSearch}
      />

      <CategoryButtons
        category={category}
        setCategory={setCategory}
      />

      <ProductList
        products={filteredProducts}
        addToCart={addToCart}
      />

      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        totalItems={totalItems}
        totalPrice={totalPrice}
      />

    </div>
  );
}

export default App;