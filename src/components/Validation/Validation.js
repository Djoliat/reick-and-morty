

const validation = (userData) =>{
   const errors = {};

   if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
        errors.email = 'El email no es valido'
   }
   if (userData.email.length === 0){
     errors.email = 'Debes rellenar el campo'
   }
   if (userData > 35){
    errors.email = 'No debe superar los 35 caracteres'
   }
   if (!/\d/.test(userData.password)){
    errors.password = 'la contaseña debe tener al menos un numero'
   }
   if (userData.password.length < 6 || userData.password.length > 10 ){
    errors.password=  'la contraseña debe tener entre 6 y 10 caracteres'
   }

   return errors;
}  

export default validation; 