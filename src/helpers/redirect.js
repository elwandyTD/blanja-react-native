const replace = (navigation, user, route) => {
  if (!user.data) {
    navigation.replace(route);
  }
};

const push = (navigation, user, route) => {
  if (!user.data) {
    navigation.push(route);
  }
};

export default {
  replace,
  push,
};
