const React = require('react');
const {Link, IndexLink} = require('react-router');

const Navigation = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">Timer Application</li>
                    <li>
                        <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/Nalyvaiko" target="_blank">Vitalii Nalyvaiko</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

module.exports = Navigation;
