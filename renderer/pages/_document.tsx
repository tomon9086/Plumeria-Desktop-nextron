import { Children } from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import { theme } from '@/lib/theme'

export default class MyDocument extends Document {
  render () {
    return (
      <Html dir='ltr' lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta content={theme.palette.primary.main} name='theme-color' />
          <link
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [
      ...Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  }
}
