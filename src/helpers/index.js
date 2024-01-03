// function that can help copy text from api
const copyText = () => {
  const text = 'Write someting'
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
};


export const setItem = (key, data) => {
  try {
    localStorage.setItem(key, data)
  } catch (error) {
    console.log('Error')
  }
}



export const getItem = (key, data) => {
  try {
    return localStorage.getItem(key)
  } catch (error) {
    console.log('Error')
  }
}

export const removeItem = (key, data) => {
  try {
    return localStorage.removeItem(key)
  } catch (error) {
    console.log('Error')
  }
}

