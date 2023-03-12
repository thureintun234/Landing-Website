import React, { useState } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail, MdStickyNote2 } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* first navbar */}
      <div className={styles.nav__main}>
        <div>
          <img src={logo} alt='logo' style={{ width: '40px' }} />
        </div>
        <div>
          <ul className={styles.nav__list}>
            <li>
              <BsFillTelephoneFill /> 6248 0838
            </li>
            <li>
              <IoLogoWhatsapp /> 8484 9948
            </li>
            <li>
              <MdEmail /> info@visibleone.com
            </li>
            <li>
              <button>
                <MdStickyNote2 /> QUOTE
              </button>
            </li>
            <li>
              <select name='lang' id='lang'>
                <option value='sg en'>SG EN</option>
                <option value='us en'>US EN</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
      {/* second navbar */}
      <div>
        <ul className={styles.second__nav}>
          <li>Home</li>
          <li>
            Services <RiArrowDropDownLine />
          </li>
          <li>
            Company <RiArrowDropDownLine />
          </li>
          <li>Blog</li>
          <li>
            Contact Us <RiArrowDropDownLine />
          </li>
          <li className={styles.search}>
            <FiSearch onClick={() => setShowSearch(!showSearch)} />{' '}
            {showSearch && <input placeholder='Search here...' />}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
