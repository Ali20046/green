import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PortfolioList from '../../components/Portfolio/PortfolioList'
import PortfolioCategory from '../../components/Portfolio/PortfolioCategory.js'
import Title from '../../components/Title.js'
import Loading from '../../components/Loading.js'

const PortfolioPage = _ => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    // get all items
    async function getData() {
        await axios.get("https://fakestoreapi.com/products")
            .then(data => {
                setData(data.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    // get itemes same category
    async function getCategory(cat) {
        await axios.get(`https://fakestoreapi.com/products/category/${cat}`)
            .then(data => {
                setData(data.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(_ => {
        getData()
    }, [])

    return (
        <>
            <section id="portfolio" className="portfolio">
                <div className="container">

                    <Title
                        name='Portfolio'
                        dec='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'
                    />
                    {loading ? <div className='d-flex justify-content-center'><Loading /></div> :
                        <>
                            <PortfolioCategory getDataFunction={getData} getCategoryFanction={getCategory} />
                            <PortfolioList itemsData={data} />
                        </>
                    }
                </div>
            </section>
        </>
    )
}

export default PortfolioPage