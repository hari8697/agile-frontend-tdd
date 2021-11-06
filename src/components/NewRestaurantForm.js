import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export const NewRestaurantForm = () => {
  return (
    <form>
      <TextField
        placeholder="Add Restaurant"
        fullWidth
        variant="outlined"
        label="Create Restaurant"
      />
      <Button variant="contained" color="primary">
        Add
      </Button>
    </form>
  )
}

export default NewRestaurantForm
