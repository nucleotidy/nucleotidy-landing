import React from 'react';
import { Container } from 'reactstrap';
import Scroll from '../scroll/index';
import './copyright.scss';

function CopyRight() {
    return (
        <div className="footer-wrapper-copytext">
            <Container>
                <div className="footer-copyright-text">
                    <div className="copyright-link">
                    </div>
                    <Scroll />
                </div>
            </Container>
        </div>
    );
}

export default CopyRight;
