import React from "react";
import { Link } from "gatsby";
//import { Parallax } from 'react-parallax';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import GitHub from "../components/github";
import { Card, Row, Col, Divider, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

//const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
//const image2 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";



const IndexPage = () => {

  return (
  <Layout>
    <SEO/>{/*Esta retorna Helmet y este es el head del html */}

    <section className="parallax-completo">
      <Card className="cards cardTitle">
          <Row>
            <Col sm={24} md={12} lg={12} className="cardLeftTitle">
              <Card className="subCardLeftTitle" cover = {<Image/>}>
                <h1><strong>SSAM</strong></h1>
              </Card>

              <div style={{padding:'10px', textAlign:'center'}}>
                  <Tooltip placement="bottom" title={"Correo Microsoft"} >
                    <a href="/" target="_blank" rel="noreferrer" className="redes">
                      <FontAwesomeIcon icon={['fab', 'microsoft']} className="hoverZoom"/>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"Correo Gmail"} >
                    <a href="/" target="_blank" rel="noreferrer" className="redes">
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </a>
                </Tooltip>
                  <Tooltip placement="bottom" title={"Facebook"} >
                    <a href="https://www.facebook.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"Twitter"} >
                    <a href="https://www.twitter.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"Instagram"} >
                    <a href="https://www.instagram.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"LinkedIn"} >
                    <a href="https://www.linkedin.com/in/stevenaraujo98/" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"GitHub"} >
                    <a href="https://www.github.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-github"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"ResearchGate"} >
                    <a href="https://www.researchgate.net/profile/Steven_Araujo3" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-researchgate"></i>
                    </a>
                  </Tooltip>
              </div>
            </Col>

            <Col sm={24} md={12} lg={12} className="cardRightTitle">
              <h2>Hola </h2>
              <p>Soy <strong>Steven Sebastian Araujo Moran</strong></p>
              <p>Aspirante a Ingeniería en Computación en la Escuela Superior Politécnica del Litoral.</p>
            </Col>
          </Row>
        </Card>
    </section>

    <section className="parallax-2">
      <Card className="cards cardRepo">
        <h2>
          <Link to="/using-typescript/">Repositorios</Link>
        </h2>
        <Divider/>
        <GitHub/>
      </Card>
      
    </section>
{/*

    <Parallax bgImage={ image1 } strength={500}>
      <div className="parallax1">
        <Card className="cards cardTitle">
          <Row>
            <Col sm={24} md={12} lg={12} className="cardLeftTitle">
              <Card className="subCardLeftTitle" cover = {<Image/>}>
                <h1><strong>SSAM</strong></h1>
              </Card>

              <div style={{padding:'10px', textAlign:'center'}}>

                
                  <Tooltip placement="bottom" title={"Correo Microsoft"} >
                    <a href="/" target="_blank" rel="noreferrer" className="redes">
                      <FontAwesomeIcon icon={['fab', 'microsoft']} className="hoverZoom"/>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"Correo Gmail"} >
                    <a href="/" target="_blank" rel="noreferrer" className="redes">
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </a>
                </Tooltip>
                  <Tooltip placement="bottom" title={"Facebook"} >
                    <a href="https://www.facebook.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"Twitter"} >
                    <a href="https://www.twitter.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"Instagram"} >
                    <a href="https://www.instagram.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"LinkedIn"} >
                    <a href="https://www.linkedin.com/in/stevenaraujo98/" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"GitHub"} >
                    <a href="https://www.github.com/stevenaraujo98" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-github"></i>
                    </a>
                  </Tooltip>
                  <Tooltip placement="bottom" title={"ResearchGate"} >
                    <a href="https://www.researchgate.net/profile/Steven_Araujo3" target="_blank" rel="noreferrer" className="redes">
                      <i class="fab fa-researchgate"></i>
                    </a>
                  </Tooltip>
              </div>
            </Col>

            <Col sm={24} md={12} lg={12} className="cardRightTitle">
              <h2>Hola </h2>
              <p>Soy <strong>Steven Sebastian Araujo Moran</strong></p>
              <p>Aspirante a Ingeniería en Computación en la Escuela Superior Politécnica del Litoral.</p>
            </Col>
          </Row>
        </Card>
      </div>
    </Parallax>

    
    <div className="parallax2">
      <Card className="cards cardsRepo">
        <h2>
          <Link to="/using-typescript/">Repositorios</Link>
        </h2>
        <Divider/>
        <GitHub/>
      </Card>

      <Card className="cards">
        <h2>
          Estudios
        </h2>
        <Divider/>
        <p>Cargando...</p>
      </Card>
      
      <Card className="cards">
        <h2>
          Certificados
        </h2>
        <Divider/>
        <p>Cargando...</p>
      </Card>

    </div>
*/}    

    {/*
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/page-2/">Go to page 2</Link> <br />
    */}
  </Layout>
  )
}

export default IndexPage
