import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, CardHeader, CardBody, FormSelect, Col } from 'shards-react'
import { createChart } from 'lightweight-charts'

class StockForecastView extends React.Component {
  componentDidMount() {
    const stock_history_model = JSON.parse(this.props.model[0].stock_history)
    const stock_history_series = this.stock_model_to_series(
      stock_history_model,
      'Adj. Close'
    )
    const stock_forecast_model = JSON.parse(this.props.model[0].stock_forecast)
    const stock_forecast_series = this.stock_model_to_series(
      stock_forecast_model,
      'yhat'
    )

    const chartOptions = {
      width: this.refs.divRef.offsetWidth,
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

    const chart = createChart(this.refs.divRef, chartOptions)

    const lineSeries = chart.addLineSeries()
    lineSeries.setData(stock_history_series)
    lineSeries.applyOptions({
      lineWidth: 2,
    })

    const forecastSeries = chart.addLineSeries()
    forecastSeries.setData(stock_forecast_series)
    forecastSeries.applyOptions({
      color: 'rgb(51, 204, 51)',
      lineWidth: 2,
    })
  }

  stock_model_to_series(stock_model, value_field) {
    let stock_series = []

    for (let index = 0; index < Object.keys(stock_model.ds).length; index++) {
      const element = {
        time: moment.unix(stock_model.ds[index] / 1000).format('YYYY-MM-DD'),
        value: stock_model[value_field][index],
      }
      stock_series.push(element)
    }

    return stock_series
  }

  render() {
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
            height="300"
            ref="divRef"
            style={{ maxWidth: '100% !important' }}
          />
        </CardBody>
      </Card>
    )
  }
}

StockForecastView.propTypes = {
  title: PropTypes.string,
  model: PropTypes.array,
}

export default StockForecastView
