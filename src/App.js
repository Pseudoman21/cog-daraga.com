import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Col, Container, Row } from 'react-bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'
function App () {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='App'>
      <header>
        <Navbar />
        <Container>
          <Row>
            <Col>
              <h3 data-aos='fade-up'>CONCERT FOR A CAUSE</h3>
              <div className='main-text'>
                <h1 data-aos='fade-up'>HE IS</h1>
                <span data-aos='fade-up'>Deuteronomy 10:17</span>
                <p data-aos='fade-up'>
                  "Jesus Christ, our Savior and Lord. The only Great and Mighty
                  God. He is so Awesome, Victorious, and seated at the right
                  hand of God's throne."
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default App
