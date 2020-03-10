module.exports = function createDreamTeam(members) {
  let team = [];

  if (!Array.isArray(members) || members.length === 0) {
    return false;
  }

  members.forEach(element => {
    if (typeof element === 'string') {
      team.push(element.trim().toUpperCase().split('').shift());
    } else {
      return false;
    }
  });
  return team.sort().join('');
};

