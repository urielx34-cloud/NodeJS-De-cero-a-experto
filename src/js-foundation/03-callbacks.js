const users = [
    {
        id : 1,
        name : 'Jhon Doe'
    },
     {
        id : 2,
        name : 'Jane Doe'
    }
];

function gatUserById(id, callback) {
   const user = users.find(function(user){
        return user.id === id;
   });

   if(!user){
     return callback(`Usuario no encontrada con id: ${id}`);
   }

   return callback(null, user)
}

module.exports = {
    gatUserById,
}