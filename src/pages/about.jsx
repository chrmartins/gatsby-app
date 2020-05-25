import React from 'react'

import Layout from '../components/Layout'
import CardV2 from '../components/CardV2'

const About = () => {

  const text = 'É um fato conhecido de todos que um leitor se distrairá'

  return (
    <Layout>

      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>About</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-4">
            <CardV2
              titleCard="Card Titulo 1"
              textCard="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação."
              colorButton="gatsby"
            />
          </div>
          <div className="col-4">
            <CardV2
              titleCard="Card Titulo 2"
              textCard="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação."
              colorButton="warning"
            />
          </div>
          <div className="col-4">
            <CardV2
              titleCard="Card Titulo 3"
              textCard="É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação."
              colorButton="danger"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
