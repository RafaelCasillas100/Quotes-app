import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import { useDispatch } from 'react-redux';
import { quotesActions } from '../store/quotes';

const NewQuote = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    dispatch(quotesActions.addQuote(quoteData));
    history.replace('/Quotes-app/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote;