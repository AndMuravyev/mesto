import React from "react";

function Login() {
  return (
    <form className="login__form">
      <h3 className="login__title">Вход</h3>
      <input
        className="login__input"
        placeholder="Email"
      />
      <input
        className="login__input"
        placeholder="Пароль"
      />
      <button className="login__button">Войти</button>
    </form>
  )
}

export default Login;