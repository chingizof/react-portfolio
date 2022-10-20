import { useEffect } from "react"

export const Cv = () => {
    useEffect(() => {
        window.location.replace('https://drive.google.com/file/d/1kGFMt56ndG2fyinCKebgbUDgPzYiJPjk/view?usp=sharing')
      }, [])
    return(
        <>
            Redireceting to my perfect Curriculum Vitae
        </>
    )
}