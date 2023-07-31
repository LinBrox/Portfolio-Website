import './index.scss'
import LogoS from '../../../assets/images/logo-s4.png'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
    // couldnt get this to work
    //   .from(outlineLogoRef.current, {
    //     drawSVG: 0,
    //     duration: 1,
    //   })

    gsap.fromTo(
        solidLogoRef.current,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            delay: 4,
            duration: 4,
        }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="L" />
      <svg
        viewBox="0 0 100 200"
        height="897pt"
        width="559pt"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g className="svg-container" fill="none">
          <path
            ref={outlineLogoRef}
            d="M102.89 99.51H57.24v-82c0-1.24-1-2.24-2.24-2.24H33.11c-1.24 0-2.24 1-2.24 2.24v100.96c0 1.24 1 2.24 2.24 2.24h69.79c1.24 0 2.24-1 2.24-2.24v-16.72a2.251 2.251 0 0 0-2.25-2.24z"
          ></path>
        </g>
      </svg>
    </div>
  )
}

export default Logo
