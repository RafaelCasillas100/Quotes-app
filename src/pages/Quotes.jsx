import { useSelector } from 'react-redux';
import QuoteList from '../components/quotes/QuoteList';

const Quotes = () => {
  const { quotes } = useSelector(state => state.quotes);

  return (
    <>
      <h1>Quotes</h1>
      <QuoteList quotes={quotes} />
    </>
  )
}

export default Quotes;