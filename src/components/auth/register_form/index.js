import React, { Fragment, useState } from "react";
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { Redirect } from "react-router-dom";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  if (redirectToLogin === true) return <Redirect to={{ pathname: "/login" }} />;

  return (
    <Fragment>
      <Column.Group centered>
        <form>
          <Column size={12}>
            <Field>
              <Label size="small">Name:</Label>
              <Control>
                <Input
                  value={name}
                  type="name"
                  required
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  value={email}
                  type="email"
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input
                  value={password}
                  type="password"
                  required
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <a
                      onClick={() => setRedirectToLogin(true)}
                      href="/Login"
                      className="button is-white has-text-custom-purple"
                    >
                      Login or
                    </a>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Register
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email or Password invalid</Help>}
          </Column>
        </form>
      </Column.Group>
    </Fragment>
  );
}

export default RegisterForm;
