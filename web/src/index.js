import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

// import routes from "./routes";
// import withTracker from './withTracker'

import 'bootstrap/dist/css/bootstrap.min.css'
import './shards-dashboard/styles/shards-dashboards.1.1.0.min.css'
import './index.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
