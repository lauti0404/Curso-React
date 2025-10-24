
import MyPhoto from '../assets/MyPhoto.jpg';
import { Link } from '../Link';
const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a home', 
    description: 'Hola me llamo Lautaro y estoy creando el clon de React Router'
  },
  en: {
    title: 'About us',
    button: 'go home',
    description: 'Hi my name is Lautaro and i am creating a clone of React Route'
  }
}
const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}
export default function AboutPage ({routeParams}){
  const i18n = useI18n(routeParams.lang ?? 'es')
    return (
      <>
        <h1>{i18n.title}</h1>
        <div>
          <img src = {MyPhoto} alt='Mi foto'/>
          <p>{i18n.description}</p>
        </div>
        <Link to = '/'>{i18n.button}</Link>
      </>
    )
}