const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
//Нашел на slackowerflow и в MDN, const и объекты
const validLength = {
  min: 4,
  max: 16,
};
//Первая подзадача
const isLoginValid = function(login) {
  if (login.length >= validLength.min && login.length <= validLength.max
  ) {
    return false;
  }
  return true;
};
//Вторая подзадача
const isLoginUnique = function(allLogins, login) { 
    for (const useLogin of logins) {
      let useLoginToLowCase = useLogin.toLowerCase();
      let loginToLowCase = login.toLowerCase();
      if (useLoginToLowCase === loginToLowCase) {
        return true;
      }
    }
    return false;
  };
  //Третья подзадача
  const addLogin = function(allLogins, login) {
    if (isLoginValid(login)) {
      return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }
    if (isLoginUnique(allLogins, login)) {
      return console.log('Такой логин уже используется!');
    }
    allLogins.push(login);
    return console.log('Логин успешно добавлен!');
  };

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);