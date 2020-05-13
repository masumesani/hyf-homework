import React from 'react';
import Home from './Home';
import About from './About';
import ProfileContainer from './ProfileContainer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const Root = () => {
    return (<Router>
        <div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/profile/:name">
                    <ProfileContainer />
                </Route>
            </Switch>
        </div>
    </Router>);
}

export default Root;