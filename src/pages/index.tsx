import { NextPage } from 'next'
import { TEXT, ARIA_LABEL } from './const'

const Home: NextPage = () => {
  return (
    <>
      <div aria-label={ARIA_LABEL.HOME_PAGE}>{TEXT.TITLE}</div>
    </>
  )
}

export default Home
