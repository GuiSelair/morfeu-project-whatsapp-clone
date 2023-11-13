export function convertImageToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (event) => {
      resolve(event.target.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
    fileReader.readAsDataURL(file)
  })
}