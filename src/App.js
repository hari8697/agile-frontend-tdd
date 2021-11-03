// import axios from "axios"
import {Provider} from 'react-redux'
import store from './store'
import RestaurantScreen from './components/RestaurantScreen'

import {createTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

const App = () => {
  // console.log(process.env.REACT_APP_API_KEY)

  // const handleClick = () => {
  //   axios
  //     .post(
  //       `https://outside-in-dev-api.herokuapp.com/${process.env.REACT_APP_API_KEY}/restaurants`,
  //       {name: "Sushi Place"},
  //     )
  //     .then(response => console.log(response.data))
  // }

  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  })

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Opinion Ate</Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <RestaurantScreen />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
