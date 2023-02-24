import React from "react";
import { User } from "../model/Model";
import { AuthService } from "../services/AuthService";
import "./App.css";
import { Login } from "./Login";

interface AppState {
  user: User | undefined;
}

export default class App extends React.Component<{}, {}> {
  private authService: AuthService = new AuthService();

  render() {
    return (
      <div>
        App from class
        <Login authService={this.authService} />
      </div>
    );
  }
}
