import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import initReactFastclick from 'react-fastclick'
import Navbar from '../components/navbar'
import { APP_NAME } from '../constants'

initReactFastclick();

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    
    return (
      <html>
        <Head>
          <title>{titleForPage()}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css" />
          <link rel="stylesheet" href="/static/css/navbar.css" />
          {styleTags}
        </Head>
        <body>
          <header>
            <Navbar />
          </header>
          <div className='root container'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

function titleForPage() {
  if(typeof window !== 'undefined') {
    switch(window.location.pathname) {
      case '/':
        return APP_NAME

      default:
        return APP_NAME
    }
  }

  return APP_NAME
}