import { ThemeProvider } from "styled-components"
import MainLayout from "./layouts/Main/MainLayout"
import GlobalStyles from "./theme/GlobalStyles"
import theme from "./theme"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout/>
    </ThemeProvider>
  )
}

export default App
