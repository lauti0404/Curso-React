import OpenAiApi from "openai"
import Configuration from "openai"
import ChatCompletionRequestMessageRoleEnum from "openai"
import { SUPPORTED_LANGUAGES } from '../constants'
import { type FromLanguage, type Language } from '../types'

// NO PUBLIQUES ESTO O SE COLARÁ TU API KEY EN EL CLIENTE
// ESTO LO HACEMOS PORQUE NOS ESTAMOS ENFOCANDO EN ESTE CURSO
// EN REACT y TYPESCRIPT
// DEBES CREAR UNA API PARA ESTO
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const configuration = new Configuration({apiKey})
const openai = new OpenAiApi(configuration)