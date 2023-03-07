import { Route, Redirect, Switch } from 'react-router-dom';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/Quotes-app" exact>
          <Redirect to="/Quotes-app/quotes"></Redirect>
        </Route>
        <Route path="/Quotes-app/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/Quotes-app/quotes/new" exact>
          <NewQuote />
        </Route>
        <Route path="/Quotes-app/quotes/:id">
          <QuoteDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
