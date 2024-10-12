import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './Product';

const ProductSlider = ({ products }) => {

    const settings = {
        dots: true,         
        infinite: true,          
        speed: 500,              
        slidesToShow: 3,          
        slidesToScroll: 1,        
        responsive: [   
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="product-slider w-full h-96 my-80">
            <Slider {...settings}>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;
