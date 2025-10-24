import { createContext, useState } from "react";
// este es el contexto que tenemos que consumir
export const FiltersContext = createContext()
// y este es el que nos provee acceso al contexto
export function FiltersProvider ({children}) {
    const [filter, setFilter] = useState ({
        category: 'all',
        minPrice: 0
    })
    return(
        <FiltersContext.Provider value={{
            filter,
            setFilter
        }}>
            {children}
        </FiltersContext.Provider>
    )
}