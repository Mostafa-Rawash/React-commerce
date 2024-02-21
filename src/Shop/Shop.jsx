import React, { useState } from 'react'
import PageHeader from '../Component/PageHeader'

import Data from '../products.json'
import ProductCard from './ProductCard'

const showingResult = "Showing 01-12 of 139 Results"
function Shop() {
    const [gridList, setGridList] = useState(true)
    const [products, setProducts] = useState(Data)





    return (<>
        <PageHeader title="Our Shop Page" curPage="Shop" />
        {/* Shop Content */}
        <div className="shop-page padding-tb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col12">
                        <article>
                            <div className="shop-title d-flex flex-wrap justify-content-between">
                                <p> {showingResult} </p>
                                <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                    <a className='grid'  onClick={()=> setGridList(!gridList)}>
                                        <i className="icofont-ghost"></i>
                                    </a>
                                    <a className='grid'  onClick={()=> setGridList(!gridList)}>
                                        <i className="icofont-listine-dots"></i>
                                    </a>
                                </div>
                            </div>

                            <div>
                                    <ProductCard GridList={gridList} Products={products}/>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col12">
                        <h2>r</h2>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Shop