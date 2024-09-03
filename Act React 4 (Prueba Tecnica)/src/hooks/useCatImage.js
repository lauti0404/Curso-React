import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({fact}) {
    const [imageUrl, setImageUrl] = useState ()
    useEffect(() =>{
        if(!fact) return
         // recupera la palabra con el num que le indiques y se pone el espacio para saber que separa esa palabra de las demas
        //para una palabra se usa
        //const firstWord = fact.split(' ')[0] 
        // y para tres   
        const firstWord = fact.split(' ', 3).join(' ')
        console.log(firstWord)
        // el join es para juntarlas en una cadena de texto
        // tmb se puede usar el .spli(' ', 3) 
        // para buscar documentacion mdn y lo que quieres buscar, nunca buscar la solucion
        fetch("https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true")
        .then(res => res.json())
        .then(response => {
            const { url } = response
            
             //ejn el estado hay que tener la minima informacion necesaria
             setImageUrl(url)  
         })    
    }, [fact])
    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }

} //{imageURL: 'https://...'}
