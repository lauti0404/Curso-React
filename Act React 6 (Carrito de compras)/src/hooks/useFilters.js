import { FiltersContext } from "../context/filter"
import { useContext } from "react"
export function useFilters () {

  const {filter, setFilter} = useContext(FiltersContext)
  const filterProduct = (products) => {
    return products.filter(product => {
      return (
        product.price > filter.minPrice && (filter.category == 'all' || product.category == filter.category)
      )
    })
  }
  return {filter, filterProduct, setFilter}
}