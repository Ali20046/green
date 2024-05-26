import React from 'react'


const PortfolioDetails = ({ PortfolioItem }) => {
    return (
        <>
            <section id="portfolio-details" className="portfolio-details">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="align-items-center">
                                <img src={PortfolioItem.image} alt={PortfolioItem.title} />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="portfolio-info">
                                <h3>{PortfolioItem.name}</h3>
                                <ul>
                                    <li><strong>Category</strong>: {PortfolioItem.category}</li>
                                    <li><strong>Description</strong>: {PortfolioItem.description}</li>
                                    <li><strong>Price</strong>: {PortfolioItem.price}$</li>
                                </ul>
                            </div>
                            <div className="portfolio-description">
                                <h2>This is an example of portfolio detail</h2>
                                <p>
                                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PortfolioDetails