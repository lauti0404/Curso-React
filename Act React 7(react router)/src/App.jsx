import { lazy, Suspense } from 'react'; //import statico 


import { Router } from './Router';

import SearchPage from './pages/Search.jsx';
import { Route } from './Route.jsx';
// lazy hace que solo se llame al import cuando se tenga que renderizar
//import dinamico
//para que el lazy funcione tenes que embolver el router con un suspense
const AboutPage = lazy (() => import('./pages/About.jsx'))
const HomePage = lazy (() => import('./pages/Home'))
const Page404 = lazy (() => import('./Page404'))


const appRoutes = [
  {
    path: '/:lang/about',
    component: AboutPage
  },
  {
    path:'/search/:query',
    component: SearchPage
  }
]

function App() {
  
//el fallback es paar qeu cuando todo este suspendido osea que todavia no haya cargado nada renderice eso
  return (
    <main>
      <Suspense fallback = {<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404}> 
            <Route path='/' component= {HomePage} />
            <Route path='/about' component= {AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
