import React from 'react'
import { Carousel } from 'react-bootstrap'

const HeroSection = () => {

    // const [index, setIndex] = useState(0)
    // const handleSelect = (selectedIndex) => {
    //     setIndex(selectedIndex)
    // }

    return (
        <Carousel className='hero carousel slide carousel-fade'
            prevIcon={<span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>}
            nextIcon={<span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>}
        >
            <Carousel.Item className='carousel-inner' interval={5000}>
                <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/slide-1.jpg)' }}>
                    <div className="carousel-container">
                        <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Green</span></h2>
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='carousel-inner' interval={5000}>
                <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/slide-2.jpg)' }}>
                    <div className="carousel-container">
                        <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className='carousel-inner' interval={5000}>
                <div className="carousel-item active" style={{ backgroundImage: 'url(assets/img/slide/slide-3.jpg)' }}>
                    <div className="carousel-container">
                        <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                            <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                            <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    )
}

export default HeroSection