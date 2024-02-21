import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, Nav } from 'react-bootstrap'
const title = "Our Products";

const ProductData = [
	{ imgUrl: 'src/assets/images/categoryTab/01.jpg', cate: 'Shoes', title: 'Nike Premier X', author: 'assets/images/course/author/01.jpg', brand: 'Nike', price: '$199.00', id: 1, },
	{ imgUrl: 'src/assets/images/categoryTab/02.jpg', cate: 'Bags', title: 'Asthetic Bags', author: 'assets/images/course/author/02.jpg', brand: 'D&J Bags', price: '$199.00', id: 2, },
	{ imgUrl: 'src/assets/images/categoryTab/03.jpg', cate: 'Phones', title: 'iPhone 12', author: 'src/assets/images/categoryTab/brand/apple.png', brand: 'Apple', price: '$199.00', id: 3, },
	{ imgUrl: 'src/assets/images/categoryTab/04.jpg', cate: 'Bags', title: 'Hiking Bag 15 Nh100', author: 'assets/images/course/author/04.jpg', brand: 'Gucci', price: '$199.00', id: 4, },
	{ imgUrl: 'src/assets/images/categoryTab/05.jpg', cate: 'Shoes', title: 'Outdoor Sports Shoes', author: 'assets/images/course/author/05.jpg', brand: 'Nike', price: '$199.00', id: 5, },
	{ imgUrl: 'src/assets/images/categoryTab/06.jpg', cate: 'Beauty', title: 'COSRX Snail Mucin', author: 'assets/images/course/author/06.jpg', brand: 'Zaara', price: '$199.00', id: 6, },
	{ imgUrl: 'src/assets/images/categoryTab/07.jpg', cate: 'Bags', title: 'Look Less Chanel Bag ', author: 'assets/images/course/author/01.jpg', brand: 'Gucci', price: '$199.00', id: 7, },
	{ imgUrl: 'src/assets/images/categoryTab/08.jpg', cate: 'Shoes', title: 'Casual Sneakers', author: 'assets/images/course/author/02.jpg', brand: 'Bata', price: '$199.00', id: 8, },

]

function CatagoryShopCase() {
	const [item, setItem] = useState(ProductData);

	function filterItem(e) {
		const pageContent = e.target.innerHTML;

		const filtered = ProductData.filter((product) => product.cate.includes(pageContent))
		pageContent == "All" ? setItem(ProductData) : setItem(filtered)


	}
	return (
		<div className="course-section style-3 padding-tb">
			{/* main section */}
			<div className="container">
				<div className="section-header">
					<h2 className="title">{title}</h2>
					<div className="course-filter-group">
						<ul className="lab-ul">
							<li onClick={filterItem}>All</li>
							<li onClick={filterItem}>Shoes</li>
							<li onClick={filterItem}>Phones</li>
							<li onClick={filterItem}>Bags</li>
							<li onClick={filterItem}>Beauty</li>
						</ul>
					</div>
				</div>


				<div className="section-body">
					<div className="section-wrapper">
						<div className='row g-4 justify-content-center row-cols-1  row-cols-lg-4 row-cols-xl-4 '>

							{item.map((product) =>
								<div className="col" key={product.key}>
									<div className="course-item style-4">
										<div className="course-inner">
											<div className="course-thubm">
												<img src={product.imgUrl} alt="" width={'100% '} />
												<div className="course-catagory">
													<div className="course-cate">
														<a href="#">{product.cate}</a>
													</div>
													<div className="course-review">
														<i className="icofont-star-shape"></i>
														<i className="icofont-star-shape"></i>
														<i className="icofont-star-shape"></i>
														<i className="icofont-star-shape"></i>
														<i className="icofont-star-shape"></i>
													</div>
												</div>

											</div>
											{/* Content */}
											<div className="course-content">
												<Link to={`/shop/${product.id}`}> <h5>{product.title}</h5> </Link>
												<div className="course-footer">
													<Link to={`/brands/${product.brand}`} className='ca-name'> {product.brand}</Link>

												</div>
												<div className="course-price">
													{product.price}
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default CatagoryShopCase