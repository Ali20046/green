import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from 'swiper/modules'
import Title from '../Title'

const OurClients = () => {

  return (
    <div>
      <section id="clients" className="clients">
        <div className="container">
          <Title
            name='Our Clients'
            dec='Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.'
          />
          <div className="clients-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={120}
                slidesPerView={6}
                onSlideChange={() => console.log('change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
              >
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slide'><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></SwiperSlide>
              </Swiper>

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default OurClients