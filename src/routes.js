import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Pricing from './pages/Pricing/Pricing'
import Bootstrap from './pages/Bootstrap/Bootstrap'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/pricing" component={Pricing}/>
            <Route path="/bootstrap" component={Bootstrap}/>
            <Route component={() => <h1>Ops! Página não encontrada</h1>}/>
        </Switch>
    )
}