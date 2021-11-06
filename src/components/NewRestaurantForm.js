import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useState } from "react"
import { connect } from "react-redux"
import { createRestaurant } from "../store/restaurants/actions"

export const NewRestaurantForm = ({ createRestaurant }) => {
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createRestaurant(name).then(() => {
      setName("")
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        placeholder="Add Restaurant"
        fullWidth
        variant="outlined"
        label="Create Restaurant"
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <Button
        variant="contained"
        color="primary"
        data-testid="new-restaurant-submit-button"
        type="submit"
      >
        Add
      </Button>
    </form>
  )
}

const mapStateToProps = null
const mapDispatchToProps = { createRestaurant }

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm)
