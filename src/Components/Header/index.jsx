
import './style.css'

import logo from '../../assets/logo.png'


function Header() {
    return (
        <div className='container' >


            <a href="/">
                <img src={logo} alt="" /></a>

            <hr />

            <ul>
                <li><a href="/brand"> о бренде </a></li>
                <li><a href="/"> продукциИ </a></li>
                <li><a href="/advantages"> преимущества </a></li>
                <li><a href="/openclub">  открыть клуб </a></li>
                <li><a href="/contact">  контакты </a></li>
            </ul>

        </div>
    );
}

export default Header;