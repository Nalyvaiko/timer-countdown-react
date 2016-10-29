const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// require styles with loaders (style, css, sass)
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/countdown" component={Countdown}></Route>
            <IndexRoute component={Timer}></IndexRoute>
        </Route>
    </Router>,
    document.getElementById('app')
);
