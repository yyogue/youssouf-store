import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import { Link } from 'react-router-dom';
import { ApiProvider } from '../context/Api';
import { useContext } from 'react';
// CDBBox

export const Footer = () => {

  const context = useContext(ApiProvider);

  const { theme } = context;

  function style () {
    return theme ? 'shadow footer' : 'shadow footer-black'
  }


  return (
    <CDBFooter className={style()}>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <a className="d-flex align-items-center p-0 text-dark" style={{ textDecoration: "none" }}>
            <span className={`ml-4 h5 mb-0 font-weight-bold ${style()}`}>Youssouf's Store</span>
          </a>
        </CDBBox>
        <CDBBox>
          <small className="ml-2">&copy; Youssouf's Store, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <a target="_blank" href="https://github.com/yyogue" style={{ textDecoration: "none", color: "white" }}><CDBIcon fab icon="github" /></a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
          <a target="_blank" href="https://www.linkedin.com/in/youssouf-yogue/" style={{ textDecoration: "none", color: "white" }}><CDBIcon fab icon="linkedin" /></a>
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
          <a target="_blank" href="https://www.instagram.com/yyogue/" style={{ textDecoration: "none", color: "white" }}><CDBIcon fab icon="instagram" /></a>
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};
