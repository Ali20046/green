import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = ({ item }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 portfolio-item">
                <div className="portfolio-wrap">
                    <img src={item.image} className="img-fluid" alt={item.title > 25 ? `${item.title.slice(0, 25)}...` : item.title} />
                    <div className="portfolio-info">
                        <h4>{item.title > 25 ? `${item.title.slice(0, 25)}...` : item.title}</h4>
                        <p>{item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}</p>
                        <div className="portfolio-links">
                            <a href={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}><i className="bx bx-plus"></i></a>
                            <Link to={`/portfoliodetails/${item.id}`} title={item.title}><i className="bx bx-link"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioItem