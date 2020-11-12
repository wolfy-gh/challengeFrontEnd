import React from 'react'
import './About.css'
import { Zoom} from '@material-ui/core'

function About() {
    return (
        <div className="about">
            <div className="about_header">
                    <h1>About us</h1>
            </div>
            <hr />
            <div className="about_content" >
                <Zoom in={true} timeout={1000}>
                    <img src="/about.jpeg" alt="about" />
                </Zoom>
                <Zoom in={true} timeout={1000}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis elit eu turpis gravida varius. Curabitur at velit orci. Vivamus pharetra velit in nisl laoreet, nec cursus odio sollicitudin. Nam mauris ante, ultrices et risus quis, lacinia mattis lorem. Quisque dapibus faucibus massa vel congue. Nullam eu nisi in mi imperdiet porttitor. Vestibulum auctor arcu magna, sit amet malesuada justo lacinia quis. Aliquam et tortor tempor, dapibus nibh at, dignissim nibh. Vivamus non accumsan magna. </p>
                </Zoom>
            </div>
        </div >
    )
}

export default About
