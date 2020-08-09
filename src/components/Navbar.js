import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
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
  };

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
                Giới thiệu
              </Link>

              <div class='navbar-item has-dropdown is-hoverable'>
                <a class='navbar-link'>Sản phẩm</a>

                <div class='navbar-dropdown'>
                  <Link className='navbar-item' to='/products'>
                    Máy tạo nhịp tim
                  </Link>
                  <Link className='navbar-item' to='/products'>
                    Máy tạo nhịp tạm thời
                  </Link>
                  <Link className='navbar-item' to='/products'>
                    Máy phá rung tự động
                  </Link>
                  <Link className='navbar-item' to='/products'>
                    Máy thăm do điện sinh lý tim
                  </Link>
                  <Link className='navbar-item' to='/products'>
                    Máy dự đoán đột tử
                  </Link>
                </div>
              </div>

              <Link className='navbar-item' to='/products'>
                Bệnh lý và điều trị
              </Link>
              <Link className='navbar-item' to='/handbook'>
                Hướng dẫn cho bệnh nhân
              </Link>
              <Link className='navbar-item' to='/blog'>
                Thông tin
              </Link>
              <Link className='navbar-item' to='/contact'>
                Liên hệ
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

export default Navbar;
