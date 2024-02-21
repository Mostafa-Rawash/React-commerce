import { arrow } from '@popperjs/core';
import { React, useState } from 'react'
import productData from '../products.json'
import { Link } from "react-router-dom"
import SelectedCaragory from '../Component/SelectedCaragory';

const title = <h2> Search your one from <span>thousand</span> of products</h2>;
const desc = " We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];


function Banner() {
  const [searchInput, setSearchInput] = useState("")

  const [filteredProducts, setfilteredProducts] = useState(productData)


  const handleSearch = (e) => {
    const searchTerm = e.target.value
    setSearchInput(searchTerm)
    const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setfilteredProducts(filtered)
    console.log(filteredProducts);
    console.log( searchInput  ,"   " ,  productData )
  }
 
  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCaragory select = {"all"}/>
            <input type="text" name="search" id="search" placeholder='Search your product' onChange={handleSearch} value={searchInput} />
            <button type="submit"><i className="icofont-search-1"></i></button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {filteredProducts.map((producttt , i) =>{return(

              <li  key={i}>
              <Link  to={`/shop/${producttt.id}`}>
                {producttt.name}</Link >
              </li>
          )}
          )}
          </ul>
        </div>
      </div>
    </div>)
}

export default Banner
