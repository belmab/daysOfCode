import React from 'react';
import { FaGithub, FaLinkedin, FaAt, FaTwitter } from 'react-icons/fa';
import { FooterCopy } from '../Styled/FooterCopy';

function Footer() {
  const author = 'Belma Besirevic';
  const iconStyle = { marginRight: '3%', fontSize: '1.2rem' };
  return (
    <div>
      <FooterCopy>Copyright ©2020 {author}</FooterCopy>
      <FaGithub style={iconStyle} />
      <FaLinkedin style={iconStyle} />
      <FaAt style={iconStyle} />
      <FaTwitter style={iconStyle} />
    </div>
  );
}

export default Footer;
