import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const Home = React.lazy(() => import('./containers/home/home'))
const Product = React.lazy(() => import('./containers/product/product'))

const Routes = props => (
    <Router>
        <Suspense fallback="Loading...">
            <Switch>
                <Route exact path="/" component={routerProps => <Home {...routerProps} />} />
                <Route exact path="/product/:id" component={routerProps => <Product {...routerProps} />} />
            </Switch>
        </Suspense>
    </Router >
)

export default Routes;