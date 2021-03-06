import React from "react"

import Layout from '../components/Layout'

const Contact = () => {

  const text = 'É um fato conhecido de todos que um leitor se distrairá'

  return(
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-12 py-4">
            <h1>Contact</h1>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </Layout>
  ) 
}

export default Contact
