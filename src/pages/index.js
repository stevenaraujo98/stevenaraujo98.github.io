import React from "react";
import { Link } from "gatsby";
import { Parallax } from 'react-parallax';

import Layout from "../components/layout";
//import Image from "../components/image";
import SEO from "../components/seo";

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 = "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

const IndexPage = () => (
  <Layout>
    <SEO/>{/*Esta retorna Helmet y este es el head del html */}

    <Parallax bgImage={ image1 } strength={500}>
      <div style={{height:"80vh"}}>
        <div style={inlineStyle}>
          <h1>Steven Sebastian Araujo Moran</h1>
        </div>
      </div>
    </Parallax>

    <Parallax bgImage={ image2 } blur={{min: -1, max: 5}}>
      <div style={{height:500, alignContent:"center", alignItems: "center", position: "relative"}}>
        <div>
          <Link to="/using-typescript/">Contactar</Link>
        </div>
      </div>
    </Parallax>

    {/*
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/page-2/">Go to page 2</Link> <br />
    */}
  </Layout>
)

export default IndexPage
