import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PortfolioCategory = ({ getCategoryFanction, getDataFunction }) => {
    const [categories, setCategories] = useState([])
    const [classActive, setClassActive] = useState(['filter-active'])

    let newarr = []

    // get category names
    async function getcategories() {
        await axios.get("https://fakestoreapi.com/products/categories")
            .then(data => setCategories(['all', ...new Set(data.data)]))
            .catch(err => console.log(err))
    }

    useEffect(_ => {
        getcategories()
    }, [])

    // filter function
    const onFilter = (cat, index) => {

        cat === 'all' ? getDataFunction() : getCategoryFanction(cat);

        newarr.map(i => {
            if (i === 'filter-active') i = ''

        })
        newarr[index] = 'filter-active'
        setClassActive(newarr)
    }

    return (
        <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                    {
                        categories.length >= 1 ? (categories.map((cat, index) => {
                            newarr[index] = ''
                            return (
                                <li className={classActive[index]} key={index} onClick={_ => onFilter(cat, index)} >{cat}</li>
                            )
                        })) : <h3 className='text-center'>No Category</h3>
                    }
                </ul>
            </div>
        </div>
    )
}

export default PortfolioCategory