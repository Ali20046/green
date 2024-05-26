import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/PortfolioDetails/Breadcrumbs'
import PortfolioDetails from '../../components/PortfolioDetails/PortfolioDetails'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'

const PortfolioDetailsPage = _ => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    async function getItem() {
        await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(data => {
                setItem(data.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getItem()
    }, [id])

    return (
        <main id='main' >
            {loading ? <div className='d-flex justify-content-center mb-2'> <Loading /> </div> : <>
                <Breadcrumbs />
                <PortfolioDetails PortfolioItem={item} />
            </>
            }
        </main>
    )
}

export default PortfolioDetailsPage