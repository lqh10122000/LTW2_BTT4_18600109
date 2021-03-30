
const User = [{
    id : 1,
    Name: 'Quang Huy',
    email: '18600109',
    password: 'kocopass'
}];


exports.findByEmail = function(email){
    return User.find(u => u.email === email);
}


exports.findById = function(id){
    return User.find(u => u.id === id);
}
