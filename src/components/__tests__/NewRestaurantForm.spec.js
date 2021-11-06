import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { NewRestaurantForm } from "../NewRestaurantForm"

describe("NewRestaurantForm", () => {
  const restaurantName = "Sushi Place"

  let createRestaurant
  let context

  beforeEach(() => {
    createRestaurant = jest.fn().mockName("createRestaurant")
    context = render(<NewRestaurantForm createRestaurant={createRestaurant} />)
  })
})