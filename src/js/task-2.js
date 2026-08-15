import * as storage from "./storage.js";
const INPUT_KEY = "input";
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const saveBtn = document.querySelector("#saveBtn");
const savedInfo = storage.load(INPUT_KEY);
if (savedInfo) {
  inputUsername.value = savedInfo.username;
  inputPassword.value = savedInfo.password;
}
const handleAddInfo = () => {
  const userInfo = {
    username: inputUsername.value,
    password: inputPassword.value,
  };

  storage.save(INPUT_KEY, userInfo);
};
saveBtn.addEventListener("click", handleAddInfo);
