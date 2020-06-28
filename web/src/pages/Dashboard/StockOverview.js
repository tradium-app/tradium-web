import React from 'react'
import { Container, Row, Col } from 'shards-react'

// import StockForecast from './components/StockForecastContainer'
import StockChartCell from './components/StockChartCell.tsx'

const StockOverview = () => {
  const symbol = 'TSLA'

  return (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-2"></Row>

      <Row>
        <Col lg="12" md="12" sm="12" className="mb-4">
          <StockChartCell symbol={symbol} />
        </Col>
      </Row>
    </Container>
  )
}

export default StockOverview
