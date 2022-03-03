import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/product" component={Product}/>
            <Route component={() => <h1>Ops! Página não encontrada</h1>}/>
        </Switch>
    )
}