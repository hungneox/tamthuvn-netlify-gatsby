import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FormattedMessage, useIntl, injectIntl } from 'gatsby-plugin-intl';
import logo from '../img/tamthuvn-logo.svg';

const Navbar = (props) => {
  const intl = useIntl();
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  useEffect(() => {
    setNavBarActiveClass(active ? 'is-active' : '');
  }, [active]);

  function toggleHamburger() {
    // toggle the active boolean in the state
    setActive(!active);
  }

  return (
    <nav className='navbar is-transparent' role='navigation' aria-label='main-navigation'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item' title='Logo'>
            <img src={logo} alt='TamThu' style={{ width: '88px' }} /> Tâm Thu | Thiết bị Y-Tế
          </Link>

          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target='navMenu'
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id='navMenu' className={`navbar-menu ${navBarActiveClass}`}>
          <div className='navbar-end has-text-centered'>
            <Link className='navbar-item' to='/about'>
              <FormattedMessage id='navigation.about' />
            </Link>

            <div class='navbar-item has-dropdown is-hoverable'>
              <a class='navbar-link'>
                <FormattedMessage id='navigation.product' />
              </a>

              <div class='navbar-dropdown'>
                <Link className='navbar-item' to='/products'>
                  <FormattedMessage id='navigation.products.pacemaker' />
                </Link>
                <Link className='navbar-item' to='/products'>
                  <FormattedMessage id='navigation.products.temporary_pacemaker' />
                </Link>
                <Link className='navbar-item' to='/products'>
                  <FormattedMessage id='navigation.products.implantable_defibrillator' />
                </Link>
                <Link className='navbar-item' to='/products'>
                  <FormattedMessage id='navigation.products.electro_physiology' />
                </Link>
                <Link className='navbar-item' to='/products'>
                  <FormattedMessage id='navigation.products.hear_t_wave' />
                </Link>
              </div>
            </div>

            <Link className='navbar-item' to='/products'>
              Bệnh lý và điều trị
            </Link>
            <Link className='navbar-item' to='/manual'>
              <FormattedMessage id='navigation.manual' />
            </Link>
            <Link className='navbar-item' to='/blog'>
              <FormattedMessage id='navigation.info' />
            </Link>
            <Link className='navbar-item' to='/contact'>
              <FormattedMessage id='navigation.contact' />
            </Link>
            <Link to={intl.locale !== 'vi' ? '/' : 'en'} className='navbar-item'>
              {intl.locale !== 'vi' ? 'Tiếng Việt' : 'English'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default injectIntl(Navbar);
