import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/tamthuvn-logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      }
    );
  };

  render() {
    return (
      <nav className='navbar is-transparent' role='navigation' aria-label='main-navigation'>
        <div className='container'>
          <div className='navbar-brand'>
            <Link to='/' className='navbar-item' title='Logo'>
              <img src={logo} alt='TamThu' style={{ width: '88px' }} /> Tâm Thu | Thiết bị Y-Tế
            </Link>

            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target='navMenu'
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id='navMenu' className={`navbar-menu ${this.state.navBarActiveClass}`}>
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
              <Link className='navbar-item' to='/blog'>
                Hướng dẫn cho bệnh nhân
              </Link>
              <Link className='navbar-item' to='/blog'>
                Thông tin
              </Link>
              <Link className='navbar-item' to='/contact'>
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
