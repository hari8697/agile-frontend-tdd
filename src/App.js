// import axios from "axios"
import RestaurantScreen from "./components/RestaurantScreen"

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

  return (
    <div>
      Hello, world.
      <RestaurantScreen />
    </div>
  )
}

export default App
