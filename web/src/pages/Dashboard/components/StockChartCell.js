import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, CardHeader, CardBody, FormSelect, Col } from 'shards-react'
import { createChart } from 'lightweight-charts'

export const QUERY = gql`
  query {
    dataFrames {
      stock
      company
      datetime
      tweets_count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No posts yet!</div>

export const Failure = ({ error }) => (
  <div>Error loading stock data: {error.message}</div>
)

const displayChart = (chartRef, dataFrames) => {
  // const stock_history_model = JSON.parse(this.props.model[0].stock_history)
  // const stock_history_series = this.stock_model_to_series(
  //   stock_history_model,
  //   'Adj. Close'
  // )
  // const stock_forecast_model = JSON.parse(this.props.model[0].stock_forecast)
  // const stock_forecast_series = this.stock_model_to_series(
  //   stock_forecast_model,
  //   'yhat'
  // )

  // console.log(
  //   'printing chartRef.current.getContext',
  //   chartRef.current.getContext('2d')
  // )

  const chartOptions = {
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
  lineSeries.setData(dataFrames)
  lineSeries.applyOptions({
    lineWidth: 2,
  })

  // const forecastSeries = chart.addLineSeries()
  // forecastSeries.setData(stock_forecast_series)
  // forecastSeries.applyOptions({
  //   color: 'rgb(51, 204, 51)',
  //   lineWidth: 2,
  // })
}

export const Success = ({ dataFrames }) => {
  const chartRef = useRef()

  useEffect(() => {
    displayChart(chartRef, [{ time: '2001-1-1', value: '11' }])
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
        {JSON.stringify(dataFrames)}
      </CardBody>
    </Card>
  )
}
