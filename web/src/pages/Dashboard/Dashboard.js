import { DefaultLayout } from '../../layouts'

import StockOverview from './StockOverview'

export default (props) => (
  <main>
    <section>
      <div>
        <DefaultLayout {...props}>
          <StockOverview {...props} />
        </DefaultLayout>
      </div>
    </section>
  </main>
)
