export const randomTime = () => {
  return Math.random() * 1000;
} 

export const checkAuthorization = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'joao' && password === '123') {
        resolve({
          name: 'João',
          theme: 'dark',
          license: 'freemium',
         })
      }

      reject({
        text: 'Usuário ou senha inválido'
      })
    }, randomTime())
  }) 
}

export const fetchUserProfile = () => {
 return new Promise(resolve => {
   setTimeout(() => resolve(), randomTime())
 }) 
}

export const fetchTodoList = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      {
        description: 'Comprar alguma coisa'
      },
      {
        description: 'Terminar app todo'
      },
      {
        description: 'Tirar dúvida sobre redux'
      }
    ]), randomTime())
  }) 
 }