/*function Search({search,setSearch}){

return(

<input type="text" 
value={search}
placeholder="Search Habit"
onChange={(e) => setSearch(e.target.value)}
/>



)

}
export default Search;*/

function Search({ search, setSearch }) {

  return (

    <div className="search">

      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

    </div>

  );
}

export default Search;



