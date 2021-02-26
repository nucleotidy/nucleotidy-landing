import React, { useState, useEffect } from 'react';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import InputBox from '../../components/input/index';
import PreviewIcon from '../../components/icon'
import Menu from '../menu/index';
import Image from '../../components/image/index';
import logo from '../../assets/images/logos/nucleotidyweblogolong.svg';
import { Title } from '../../components/title/index';
import {search, x } from 'react-icons-kit/feather'
import './navbar.scss';


function Navbar() {
    const [activeClass, setactiveClass] = useState(false);
    const [searchValue, setSearch] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                let scoll = null
                if (window.scrollY === 0) {
                    scoll = false
                } else {
                    scoll = true
                }
                setactiveClass(scoll)
            });
        }
    }, [])

    const searchClick = () => {
        setSearch(!searchValue)
    }

    return (
        <div className="App-header">
            <header className={`header-sticky ${activeClass ? 'sticky' : ''}`}>
                <Container>
                    <Row>
                        <Col sm={6} className="left-block">
                            <div className={` ${activeClass ? 'showLogo' : 'hideLogo'}`}>
                              <a href="/">
                                  <Image Path={logo} className="logo-img" />
                              </a>
                            </div>
                        </Col>
                        <Col sm={6} className="right-block">
                            <div className="search-menu-account-wrapper">
                                <div className="menu-right-1">
                                    <div className="search-wrapper">
                                        <div className="search-header" onClick={searchClick}>
                                            <PreviewIcon icon={search} />
                                        </div>

                                        <div className={`search-outer-wrapper ${searchValue ? 'open' : ''}`}>
                                            <div className="search-close gradient-color" onClick={searchClick}>
                                                <PreviewIcon icon={x} />
                                            </div>
                                            <div className="search-title-box">
                                                <Title Class="search-title" Name="Search Panel" />
                                                <div className="search-box">
                                                    <FormGroup>
                                                        <InputBox
                                                            Type="text"
                                                            Name="search"
                                                            PlaceHolder="Search items"
                                                        />
                                                    </FormGroup>
                                                    <span className="search-icon">
                                                        <PreviewIcon icon={search} />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Menu />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Navbar;
