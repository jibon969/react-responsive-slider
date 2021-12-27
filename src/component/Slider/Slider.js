import React from 'react';
import image1 from '../../static/image/2000x400.png'
import image2 from '../../static/image/1400x400.png'
import image3 from '../../static/image/800x400.png';
import image4 from '../../static/image/600x400.png'


const Slider = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <picture>
                            <source srcset={image1} media="(min-width: 1400px)" />
                            <source srcset={image2} media="(min-width: 768px)" />
                            <source srcset={image3} media="(min-width: 576px)" />
                            <img srcset={image4} alt="" class="d-block img-fluid" />
                        </picture>
                    </div>
                    <div class="carousel-item">
                        <picture>
                            <source srcset={image1} media="(min-width: 1400px)" />
                            <source srcset={image2} media="(min-width: 768px)" />
                            <source srcset={image3} media="(min-width: 576px)" />
                            <img srcset={image4} alt="" class="d-block img-fluid" />
                        </picture>
                    </div>
                    <div class="carousel-item">
                        <picture>
                            <source srcset={image1} media="(min-width: 1400px)" />
                            <source srcset={image2} media="(min-width: 768px)" />
                            <source srcset={image3} media="(min-width: 576px)" />
                            <img srcset={image4} alt="" class="d-block img-fluid" />
                        </picture>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Slider;