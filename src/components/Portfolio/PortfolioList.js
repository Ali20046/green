import React from 'react'
import PortfolioItem from './PortfolioItem'

const PortfolioList = ({ itemsData }) => {
    return (
        <div className="row portfolio-container">
            {
                itemsData.length >= 1 ? (itemsData.map(item => {
                    return (
                        <PortfolioItem key={item.id} item={item} />
                    )
                })) : <h3 className='text-center'>Porfolio is empty</h3>
            }
        </div>
    )
}

export default PortfolioList