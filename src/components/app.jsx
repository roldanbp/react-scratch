import './app.scss';
import logo from '../../public/assets/logo.svg';

export default function() {
    return <div className="ui-wrapper">
        <img src={logo} with={200} alt="base logo"/>
        <h1 className="ui-wrapper-text">React from scratch</h1>
    </div>
}