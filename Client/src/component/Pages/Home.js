import React from "react";
import { Row, Input, Parallax, Col } from "react-materialize";
// import { Redirect } from "react-router-dom";

class Home extends React.Component {


  render() {
    
      return (
        <>
          <Row>
            <Col s={12} className='grid-example'>
              <div>
                <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
                  <div className="section white">
                    <div className="row container btnContainer">
                      <h2 className="header">tripper</h2>
                      <p className="grey-text text-darken-3 lighten-3">Are you tripping?<br></br> <strong>Sign up and start telling your story</strong></p>
                      <br />

                      <Row>
                        <Input id="loginEmail"  type="email" label="Email" s={12}  />
                        <Input id="loginPassword"  type="password" label="password" s={12}  />
                        {/* {this.state.err ? <Toast >{this.state.err}</Toast> : null} */}
                      </Row>
                  
                  </div>
                </div>
              </div>
              </Col>
            </Row>
          <div className="section white"></div>
        </>
      );
    }
  }


export default Home;

