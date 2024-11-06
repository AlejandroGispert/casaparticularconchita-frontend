import React, { Component } from "react";
import "./Auth.css";
import AuthContext from "../authContext/auth-context";

// import { useState } from "react";

class AuthPage extends Component {
  state = {
    isLogin: true,
  };

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();

    // this.state = { hasToken: false, isLoaded: false };
  }

  componentDidMount() {
    localStorage.getItem("user");

    // AsyncStorage.getItem("id_token").then((token) => {
    //   this.setState({ hasToken: token !== null, isLoaded: true });
    // });
  }

  switchModeHandler = () => {
    this.setState((prevState) => {
      return { isLogin: !prevState.isLogin };
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    // console.log(email, password);

    //thid To setstate persistent login
    const user = { email, password };

    let requestBody = {
      query: `
        query Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            userId
            token
            tokenExpiration
          }
        }
      `,
      variables: {
        email: email,
        password: password,
      },
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation CreateUser($email: String!, $password: String!) {
            createUser(userInput: {email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
        variables: {
          email: email,
          password: password,
        },
      };
    }
    //READY TO SERVER
    // fetch("http://localhost:8000/graphql", {

    fetch("/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.tokenExpiration
          );

          //take thios away

          // set the state of the user
          // setUser(resData);
          // // store the user in localStorage
          localStorage.setItem("user", resData);
          // console.log(resData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // const yesstate = useState()

    return (
      <form className="auth-form" onSubmit={this.submitHandler}>
        <div className="form-control ">
          <label htmlFor="email">E-Mail </label>
          <input type="email" id="email" ref={this.emailEl} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Log in</button>
          {/* <button type="button" onClick={this.switchModeHandler}>
            Switch to {this.state.isLogin ? "Signup" : "Login"}
          </button> */}
        </div>
      </form>
    );
  }
}

export default AuthPage;
