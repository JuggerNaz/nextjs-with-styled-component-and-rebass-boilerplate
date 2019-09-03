import Navbar from '../core/Navbar'
import { Row, Container, Header } from '../layout'

const Home = props =>
    < Row
    >
        <Navbar />
        { props.children }
    </Row>

export default Home