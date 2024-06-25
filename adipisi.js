const LegendRole = 'legend';

function getRole(user) {
  if (user.isAdmin) {
    return 'admin';
  } else {
    return LegendRole;
  }
}

console.log(getRole({ isAdmin: false })); // Output: 'legend'
