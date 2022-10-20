import React from "react";
import { useState } from "react";
import { Button, Input, FormField, Label, Error } from "../styles";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [city, setCity] = useState("");
  const [atpRating, setAtpRating] = useState();
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleUserNameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function handlePasswordConfirmation(event) {
    setPasswordConfirmation(event.target.value);
  }
  function handleAtpRating(event) {
    setAtpRating(event.target.value);
  }
  function handleName(event) {
    setName(event.target.value);
  }

  function handleNewUserSubmit(event) {
    event.preventDefault();
    if (
      [username, atpRating, city, password, passwordConfirmation, name].some(
        (value) => value.trim() === ""
      ) &&
      password === passwordConfirmation
    ) {
      alert("Please Fill Out Form, Thank You!");
      return null;
    }
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        city,
        atp_rating: atpRating,
        name,
      }),
    }).then((response) => {
      setIsLoading(false);
      if (response.ok) {
        response.json().then((user) => onLogin(user));
      } else {
        response.json().then((error) => setErrors(error.errors));
      }
    });
  }
  return (
    <form onSubmit={handleNewUserSubmit}>
      <FormField>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={handleName}
        />
      </FormField>
      <FormField>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={handleUserNameChange}
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={handlePasswordConfirmation}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="city">City</Label>
        <Input type="text" id="city" value={city} onChange={handleCity} />
      </FormField>
      <FormField>
        <Label htmlFor="atpRating">ATP Rating(1.0 - 4.0)</Label>
        <Input
          type="number"
          rows="1"
          id="atpRating"
          value={atpRating}
          onChange={handleAtpRating}
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}

export default SignUpForm;
