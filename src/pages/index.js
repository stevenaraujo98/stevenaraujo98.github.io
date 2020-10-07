import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import GitHub from "../components/github";

import { Card, Row, Col, Divider, Tooltip } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const IndexPage = () => {
  //MyRedSocialQuery es un nombre para el query
  const { allRedSocial, site } = useStaticQuery(
    graphql`
      query MyRedSocialQuery {
        allRedSocial {
          nodes {
            name
            url
            id
          }
        },
        site {
          siteMetadata {
            title
            description
            author
            nombresApellidos
            repositorio
          }
        }
      }
    `
  )
  //console.log(allRedSocial.nodes);
  //console.log(site.siteMetadata);

  return (
  <Layout>
    <SEO/>{/*Esta retorna Helmet y este es el head del html */}

    <section className="parallax-completo">
      <Card className="cards cardTitle">
          <Row>
            <Col sm={24} md={12} lg={14} className="cardLeftTitle">
              <Card className="subCardLeftTitle" cover = {<Image/>}>
                <h1><strong>SSAM</strong></h1>
              </Card>

              <div className="redesSociales" style={{padding:'10px', textAlign:'center'}}>
                  {
                    allRedSocial.nodes.map((todo) => {
                      var iconoAwsome;
                      if(todo.name === 'facebook') iconoAwsome = 'facebook-f'
                      else if(todo.name === 'linkedin') iconoAwsome = 'linkedin-in'
                      else iconoAwsome = todo.name

                      return(
                        <Tooltip placement="bottom" title={todo.name} >
                          <a href={todo.url} target="_blank" rel="noreferrer" className="redes">
                            <FontAwesomeIcon icon={['fab', iconoAwsome]} size="lg" />
                          </a>
                        </Tooltip>
                      )
                    })
                  }
              </div>
            </Col>

            <Col sm={24} md={12} lg={10} className="cardRightTitle">
              <h2>Hola </h2>
                <p>Soy <strong>{site.siteMetadata.nombresApellidos}</strong></p>
              <p>Aspirante a Ingeniería en Computación en la Escuela Superior Politécnica del Litoral.</p>
            </Col>
          </Row>
        </Card>
    </section>

    <section className="parallax-2">
      <Card className="cards cardRepo">
        <h2>
          <Link to={site.siteMetadata.repositorio}>
            <Tooltip placement="bottom" title='Ver mi repositorios en GitHub' >
              Repositorios
            </Tooltip>
          </Link>
        </h2>
        <Divider/>
        <GitHub/>
      </Card>
    </section>

    <section className="parallax-2">
      <Card className="cards">
        <h2>
        <Link to="/using-typescript/">Estudios</Link>
        </h2>
        <Divider/>
        <p>Cargando...</p>
      </Card>
    </section>

    <section className="parallax-2">
      <Card className="cards">
        <h2>
          Certificados
        </h2>
        <Divider/>
        <p>Cargando...</p>
      </Card>
    </section>

    <section className="parallax-bgColor">
      <Card className="cards">
        <h2>
          Certificados
        </h2>
        <Divider/>
        <p>Cargando...</p>
      </Card>
    </section>


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
