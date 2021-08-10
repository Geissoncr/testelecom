import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #273582;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif;
  },
  * {
  box-sizing: border-box;
  margin:0;
  padding:0;
  }
img{
  max-width: 100%;
  heigth: auto;
  display:block;
}
#__next{
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
`

const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#273582',

  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
