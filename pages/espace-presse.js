import React from 'react'
import Layout from 'components/Layout'
import PageContent from 'components/PageContent'
import config from '../config/config'

import '../styles/styles.scss'
import ErrorPage from 'next/error'

class ContactsPage extends React.Component {
  render () {
    if (config.press.active !== true) {
      return <ErrorPage statusCode={404} />
    }
    return (
      <Layout name='espace-presse-page has-bg-star'>
        <div className='section'>
          <div className='container'>
            <PageContent nid={config.contact.pageId.toString()} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContactsPage
