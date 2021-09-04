import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className='blue darken-1'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
          React Fortnite Shop
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/EvgeniiKolesnikov/react-food' target='_blank' rel='noreferrer'>
              Repo
            </a>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contacts'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
