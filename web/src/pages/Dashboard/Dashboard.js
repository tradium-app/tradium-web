import { DefaultLayout } from '../../layouts'

import StockOverview from './StockOverview'

export default (props) => (
  <main>
    <section>
      <div>
        <DefaultLayout {...props} noNavbar={true} noFooter={true}>
          <StockOverview {...props} />
        </DefaultLayout>
      </div>
    </section>
  </main>
)
