import React, { Component } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import api from "../api/api";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: "",
      username: "",
      email: "",
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    api
      .get("/users")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => alert(err));
  };

  deleteUser = (id) => {
    // var array = [...this.state.users];
    // if (id !== -1) {
    //   array.splice(id, 1);
    //   this.setState({ users: array });
    // }

    api
      .delete(`/users/${id}`)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  addUser = () => {
    var user = {
      id: this.state.users.length + 1,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
    };

    this.setState({
      users: [...this.state.users, user],
      name: "",
      username: "",
      email: "",
    });
    console.log("Yey!");
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.state.users);
    return (
      <Grid container justify="center">
        <Grid item xs={2}>
          <Typography variant="body2">New User:</Typography>
          <TextField
            variant="outlined"
            placeholder="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Typography variant="body2">New User Name:</Typography>
          <TextField
            variant="outlined"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Typography variant="body2">New Email:</Typography>
          <TextField
            variant="outlined"
            placeholder="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => this.addUser()}
          >
            Add User
          </Button>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={9}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => this.deleteUser(row.id)}
                        color="secondary"
                        size="small"
                        variant="outlined"
                      >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    );
  }
}
