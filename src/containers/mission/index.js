import React from 'react';
import Button from '../../components/button';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../../assets/animations/p5/basefrenzy.js';

import './mission.scss';

function Mission() {
    return (
        <section className="mission-wrapper" id="mission">
              <P5Wrapper sketch={sketch} />
                      <div className="mission-content">
                        <h1>
                          Sequencing a lot?
                        </h1>
                        <h2>
                          Still have an overview?
                        </h2>
                          <div className="mission-btn-wrapper">
                              <Button
                                  Class="button1 btn button2 gradient-color"
                                  Name="HELP!"
                              />
                          </div>
                      </div>
        </section>
    );
}

export default Mission;
