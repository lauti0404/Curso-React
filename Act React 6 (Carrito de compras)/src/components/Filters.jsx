import './Filters.css'
import { useFilters } from '../hooks/useFilters'
import { useId } from 'react'
export function Filters(){
    const { filter, setFilter } = useFilters()
    const minPriceFilterId = useId ()
    const categoryFilterId = useId ()
    const handleChangeMinPrice = (event) => {
        setFilter(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }
    const handleChangeCategory = (event) => {
        setFilter(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
    return (
        <section className ='filters'>
            <div>
                <label htmlFor = {minPriceFilterId}>Price</label>
                <input 
                type = 'range'
                id = {minPriceFilterId}
                min = '0'
                max = '1000'
                onChange={handleChangeMinPrice}
                value={filter.minPrice}
                />
                <span>${filter.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange = {handleChangeCategory}>
                    <option value='all'>all</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </section>
    )
}