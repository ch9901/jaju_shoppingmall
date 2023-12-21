import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router";

const FormContainer = styled.div`
  width: 100%;
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [idCheck, setIdCheck] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const ClickToLogin = () => {
    if (idCheck !== "" && pwCheck !== "") {
      setAuthenticate(false);
      navigate("/");
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "1000px",
        height: "500px",
      }}
    >
      <Form>
        <FormContainer>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="아이디를 입력해주세요"
              style={{ height: "60px" }}
              autoFocus
              onChange={setIdCheck}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요"
              style={{ height: "60px" }}
              onChange={setPwCheck}
              required
            />
          </Form.Group>
        </FormContainer>

        <Button
          variant="dark"
          type="submit"
          style={{ height: "60px", width: "100%" }}
          onClick={ClickToLogin}
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
