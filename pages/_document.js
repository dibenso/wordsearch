import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { APP_NAME } from '../constants'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    
    return (
      <html>
        <Head>
          <title>{titleForPage()}</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
          {styleTags}
        </Head>
        <body>
          <div className='root'>
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