import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <title>YWC15 Programming Homework | Interview Candidates</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000" />
          <meta name="viewport" content="width=device-width" />
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
