import users from './user.js';
const getSortedUniqueSkills = users => {
    return users.flatMap(user => user.skills)
        .filter((user, index, arr) => arr.indexOf(user) === index)
            .sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex',
//    'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]