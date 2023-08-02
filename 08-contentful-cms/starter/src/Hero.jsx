import React from 'react';
import heroImg from './assets/hero.svg'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful cms</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolor distinctio consequuntur ipsa suscipit sequi exercitationem repellendus tempora? Eum, accusantium.</p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman" />
                </div>
            </div>
        </section>
    )
}

export default Hero;