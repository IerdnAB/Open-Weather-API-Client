import './header.css'
import {Link} from 'react-router-dom'

const Header = ({brand, links}) =>{
    return (
        <div className="header-container">
            <div id="header-brand">{brand}</div>
            <ul className='header-links'>{links.map(link => (
                <li key={link.label}><Link to={link.path}>{link.label}</Link></li>
            ))}</ul>
        </div>
    )

}

export default Header;