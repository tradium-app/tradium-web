import React, { useRef, useEffect } from 'react'
import moment from 'moment'
import { Card, CardHeader, CardBody, Col } from 'shards-react'
import { createChart, UTCTimestamp } from 'lightweight-charts'

export const QUERY = gql`
  query {
    stock_data {
      stock
      company
      datetime
      close_price
      predicted_close_price
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No data yet!</div>

export const Failure = ({ error }) => (
  <div>Error loading stock data: {error.message}</div>
)

const displayChart = (chartRef, stock_data) => {
  const close_price_data = stock_data.map((row) => {
    const timestamp = (moment.utc(row.datetime).valueOf() /
      1000) as UTCTimestamp

    return {
      time: timestamp,
      value: row.close_price,
    }
  })

  const predicted_close_price_data = stock_data.map((row) => {
    const timestamp = (moment.utc(row.datetime).valueOf() /
      1000) as UTCTimestamp

    return {
      time: timestamp,
      value: row.predicted_close_price,
    }
  })

  const chartOptions = {
    timeScale: {
      visible: true,
      timeVisible: true,
    },
    width: chartRef.offsetWidth,
    height: 300,
    grid: {
      horzLines: {
        color: '#fef',
      },
      vertLines: {
        color: '#fef',
      },
    },
  }

  const chart = createChart(chartRef, chartOptions)

  chart
    .addLineSeries({
      lineWidth: 2,
    })
    .setData(close_price_data)

  chart
    .addLineSeries({
      lineWidth: 1,
      color: '#bd2c0b',
    })
    .setData(predicted_close_price_data)
}

export const Success = ({ stock_data }) => {
  const chartRef = useRef()

  useEffect(() => {
    if (chartRef.current != null) {
      displayChart(chartRef.current, stock_data)
    }
  })

  return (
    <Card small className="h-100">
      <CardHeader className="border-bottom">
        <Col md="4" className="form-group">
          {/* <FormSelect id="feInputState">
            <option>Select Stock...</option>
            <option>TSLA</option>
            <option>NFLX</option>
          </FormSelect> */}
        </Col>
      </CardHeader>
      <CardBody className="pt-0">
        <div
          ref={chartRef}
          height="300"
          style={{ maxWidth: '100% !important' }}
        />
      </CardBody>
    </Card>
  )
}
