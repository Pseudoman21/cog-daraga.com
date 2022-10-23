import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { GoLocation } from 'react-icons/go'
export default function Schedules () {
  return (
    <Container className='py-5 text-white'>
      <div>
        <h1 className='d-flex justify-content-center'>
          <GoLocation className='my-auto' />
          COG GABAWAN | DARAGA, ALBAY
        </h1>
      </div>
      <div className='d-flex justify-content-between py-5 col-lg-6 mx-auto'>
        <h1 className='my-auto'>DECEMBER</h1>
        <Row>
          <Col className='my-auto'>
            <h2 className='my-auto'>| 20 | 22 | 23 |</h2>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
