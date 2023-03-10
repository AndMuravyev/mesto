import React from "react";
// import handleAuth from "./App";

function Login({onAuth}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value)
  }

  // function handleChange(evt) {
  //   const {value} = evt.target
  //   evt.target.name === 'email' ? setEmail(value) : setPassword(value)
  // }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAuth(password, email)
  }

  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <h3 className="login__title">Вход</h3>
      <input
        className="login__input"
        placeholder="Email"
        type="email"
        name="email"
        onChange={handleEmailChange}
        value={email || ""}
        required
      />
      <input
        className="login__input"
        placeholder="Пароль"
        type="password"
        name="password"
        onChange={handlePasswordChange}
        value={password || ""}
        required
      />
      <button className="login__button" type="submit">Войти</button>
    </form>
  )
}

export default Login;