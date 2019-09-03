import React from 'react'
import Navbar from '../core/Navbar'
import { Row, Container, Header } from '../layout'

const Home = props =>
    <React.Fragment
    >
        < Row
            fontFamily='nunito'
        >
            <Navbar />
        </Row>
        {props.children}
    </React.Fragment>

export default Home