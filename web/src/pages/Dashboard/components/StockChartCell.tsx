import React, { useRef, useEffect } from 'react'
import moment from 'moment'
import { Card, CardHeader, CardBody, FormSelect, Col } from 'shards-react'
import { createChart, UTCTimestamp } from 'lightweight-charts'

export const QUERY = gql`
  query {
    stock_data {
      stock
      company
      datetime
      tweets_count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No data yet!</div>

export const Failure = ({ error }) => (
  <div>Error loading stock data: {error.message}</div>
)

const displayChart = (chartRef, stock_data) => {
  const stock_data_formatted = stock_data.map((row) => {
    const timestamp = (moment.utc(row.datetime).valueOf() /
      1000) as UTCTimestamp

    return {
      time: timestamp,
      value: row.tweets_count,
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

  const lineSeries = chart.addLineSeries()
  lineSeries.setData(stock_data_formatted)
  lineSeries.applyOptions({
    lineWidth: 2,
  })
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
          <FormSelect id="feInputState">
            <option>Select Stock...</option>
            <option>TSLA</option>
            <option>NFLX</option>
          </FormSelect>
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
