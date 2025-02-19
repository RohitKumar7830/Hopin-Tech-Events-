import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODcwMDEzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Emily Brown',
  author3Name: 'David Johnson',
  review2:
    'Attending events through this platform has helped me stay updated with the latest trends in technology. Highly recommended!',
  review4:
    'I have found my last job through one of the networking events organized by this platform. Forever grateful!',
  author2Position: 'CTO, Startup Y',
  author2Src:
    'https://images.unsplash.com/photo-1571816119553-df62a2eedf56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODcwMDEzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  author1Name: 'John Doe',
  author3Position: 'Head of Engineering, Company Z',
  content1:
    'I have attended multiple events organized by this platform and each one has been a great learning experience. The speakers are top-notch, and the networking opportunities are invaluable.',
  review3:
    'Great platform for tech enthusiasts. The events are well-organized and cover a wide range of topics.',
  author1Src:
    'https://images.unsplash.com/photo-1569339727277-85a6b5db8816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODcwMDEzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of David Johnson',
  author2Name: 'Jane Smith',
  author2Alt: 'Image of Jane Smith',
  review1: '5 stars',
  author4Position: 'Software Developer, Tech Firm A',
  author1Position: 'CEO, Tech Company X',
  author3Src:
    'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODcwMDEzNnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author4Name: 'Emily Brown',
}

Testimonial.propTypes = {
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Name: PropTypes.string,
  review2: PropTypes.string,
  review4: PropTypes.string,
  author2Position: PropTypes.string,
  author2Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Name: PropTypes.string,
  author3Position: PropTypes.string,
  content1: PropTypes.string,
  review3: PropTypes.string,
  author1Src: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author2Alt: PropTypes.string,
  review1: PropTypes.string,
  author4Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Src: PropTypes.string,
  heading1: PropTypes.string,
  author4Name: PropTypes.string,
}

export default Testimonial
