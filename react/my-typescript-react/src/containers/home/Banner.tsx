import * as React from 'react';
import { BannerList } from '../../types/home';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class App extends React.Component<{ banners: BannerList }> {
    render() {
        const settings: Settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: 'banner-slider'
        };
        return (
            <Slider {...settings}>
                {this.props.banners.map(banner => <div key={banner.id}><img src={banner.image_url} alt={banner.title} /></div>)}
            </Slider>
        );
    }
}

export default App
