import { toast } from "react-toastify";

const toastify = (text, type, time = 1000) => {
  if (type === "error") {
    return toast.error(text, {
      autoClose: time,
    })
  }
  
  return (
    toast.success(text, {
      autoClose: time,
    })
  )
}

export default toastify