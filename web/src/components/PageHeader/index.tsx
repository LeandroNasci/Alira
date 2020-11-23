import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiLogIn, FiShoppingCart } from 'react-icons/fi';

import logoImg from '../../assets/images/logo.svg';
import notesImg from '../../assets/images/notes.png';
import DesktopNavbar from '../DesktopNavbar';
import MobileNavbar from '../MobileNavbar';

import './styles.css';

interface PageHeaderProps {
  showBack?: boolean;
  compact?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ compact = false, showBack, children }) => {

   return (
    <header>
      {!compact &&
        <div className="top-bar-container">
          {showBack
            ? <Link to="/"><FiArrowLeft /><span> Voltar</span></Link>
            : <span />
          }

          <div className="top-bar-session">
            {children}
            <Link to="/cart">
              <span>Carrinho </span>
              <FiShoppingCart />
            </Link>
            <Link to="/login">
              <span>Login </span>
              <FiLogIn />
            </Link>
          </div>
        </div>
      }

      <div className="header-content">
        <img src={notesImg} alt="postite"/>

        <div className="logo-container">
          <h2>Sua vida mais planejada com fofuras</h2>
          <img src={logoImg} alt="Alira Notes"/>
        </div>
        <div className="words">
          simplicidade &bull; utilidade &bull; beleza &bull; produtos exclulsivos
        </div>
      </div>

      {/* {!compact && <DesktopNavbar />} */}
      {!compact && <MobileNavbar />}
    </header>
  );
}

export default PageHeader;
