import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Search from '../Search/Search';

class Header extends React.Component {

  render () {
   
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.headerIcon} />
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
              <NavLink exact to='/FAQ'>FAQ</NavLink>
            </nav>
          </div>
          <Search />
        </Container>
      </header>
    );
  }
}

export default Header;