import { useState, useEffect, Children } from 'react'
import { EVENTS } from './consts';
import { match } from 'path-to-regexp';
export function Router ({children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1>}){ 
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(()=> {
      const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
      }
      window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.addEventListener(EVENTS.POPSTATE, onLocationChange)
      return () => {
        window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
        window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
      }
    }, [])
    let routeParams = {}

    // agregar las rutas que vienen del children <Route/> components
    //extrai los datos leyendo las props de Route
    const routesFromChildren = Children.map(children, ({ props, type }) => {
      const { name } = type
      const isRoute = name === 'Route'
      return isRoute ? props : null
    })
    const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

    const Page = routesToUse.find(({path}) => {
      if (path == currentPath) return true
      // use path-to-regexp para poder detectar rutas dinamicas como por ejemplo
      // /search/:query <- :query es una ruta dinamica
      const matcherURL = match(path, {decode: decodeURIComponent})
        const matched = matcherURL(currentPath)
        if(!matched) return false

        //guardar los parametros de la URL que eran dinamicos
        //y que extrai con path-to-regexp
        //y la url es /search/javascript
        // matched.params.query == 'javascript'
        routeParams = matched.params
        return true
    })?.component
    return Page ? <Page routeParams = {routeParams}/> : <DefaultComponent routeParams = {routeParams}/>
}