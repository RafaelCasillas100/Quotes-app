import { useSelector } from "react-redux";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
// import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const { id } = useParams();
  const match = useRouteMatch();
  const { quotes } = useSelector(state => state.quotes);
  // eslint-disable-next-line eqeqeq
  const currentQuote = quotes.find(quote => quote.id == id);

  if (!currentQuote) return <p>No quote found</p>

  return (
    <>
      <HighlightedQuote text={currentQuote.text} author={currentQuote.author} />
      <Route path={match.url} exact>
        <div className="centered">
          {/* <Link className="btn--flat" to={`/quotes/${id}/comments`}> */}
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      {/* <Route path={`/quotes/${id}/comments`}> */}
      {/* <Route path="/quotes/:id/comments"> */}
      <Route path={`${match.url}/comments`}>
        {/* <Comments /> */}
        <h3 style={{ textAlign: 'center' }}>There are no comments yet...</h3>
      </Route>
    </>
  )
}

export default QuoteDetail;