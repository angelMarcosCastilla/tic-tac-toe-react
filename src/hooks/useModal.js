import { useState } from "react"

const useModal = () =>{
  const [isopen, setIsopen] = useState(false)
  const openModal = () => {
    setIsopen(true)
  }

  const closeModal = () => {
    setIsopen(false)
  }
  
  return{
    isopen,
    closeModal,
    openModal
  }
}

export default useModal