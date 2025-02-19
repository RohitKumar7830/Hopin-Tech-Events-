import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{props.heading1}</h1>
          <p className="hero-text2 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image5Src:
    'https://a.storyblok.com/f/188325/1920x1280/41e681c422/alexandre-pellaes-6vajp0pscx0-unsplash-1-1.jpg',
  image2Src:
    'https://images.spiceworks.com/wp-content/uploads/2023/09/05181029/top-10-tech-events-in-September-2023.jpg',
  image3Src:
    'https://images.tech.co/wp-content/uploads/2024/01/22094704/EPN_0539-3-1-e1705934863400.jpg',
  image4Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image7Src:
    'https://img.bizbash.com/files/base/bizbash/bzb/image/2023/10/image003.6532f37567e5b.png?auto=format%2Ccompress&fit=max&q=70&w=1200',
  image11Src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bIVXM15UF1lZHQd6F-6lVdbkQchN3244-Q&s',
  image12Alt: 'Hero Image',
  image1Src:
    'https://miro.medium.com/v2/resize:fit:2560/1*76KSie833sq6FAYtnbS7Ng.jpeg',
  image8Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image4Src:
    'https://blog.planningpod.com/wp-content/uploads/2023/10/Screenshot-2023-10-03-at-8.19.00-AM.png',
  image7Alt: 'Hero Image',
  action1: 'Explore Events',
  image6Alt: 'Hero Image',
  content1:
    'Stay updated with the most exciting tech events happening around the world. From conferences to workshops, find everything in one place.',
  image2Alt: 'Hero Image',
  heading1: 'Discover the Latest Tech Events',
  image8Src:
    'https://www.fischtankpr.com/wp-content/uploads/2023/10/shutterstock_2232908089-scaled.jpg',
  image10Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  action2: 'Post Your Event Now',
  image1Alt: 'Tech Event Banner',
  image12Src:
    'https://assets.ennomotive.com/wp-content/uploads/2019/10/09134121/tech-events-2-e1570628767415.jpg',
  image9Src:
    'https://eventtechlive.com/wp-content/uploads/2024/05/47cbde67-1435-4351-b764-7d92bac767ae-1.jpg',
  image6Src:
    'https://d3o1wlpkmt4nt9.cloudfront.net/wp-content/uploads/2017/01/21120059/tech-conferences-5-min.jpg',
  image10Src:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0blOsBPqit_m1EBoIEa91A0ndZnaUIpvPA&s',
  image11Alt: 'Hero Image',
}

Hero.propTypes = {
  image5Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image11Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image7Alt: PropTypes.string,
  action1: PropTypes.string,
  image6Alt: PropTypes.string,
  content1: PropTypes.string,
  image2Alt: PropTypes.string,
  heading1: PropTypes.string,
  image8Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  action2: PropTypes.string,
  image1Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image9Src: PropTypes.string,
  image6Src: PropTypes.string,
  image10Src: PropTypes.string,
  image11Alt: PropTypes.string,
}

export default Hero
