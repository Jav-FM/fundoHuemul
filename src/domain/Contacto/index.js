import React, { useRef, useState, useEffect } from "react";
import { Button, Form, Image, Alert, Spinner } from "react-bootstrap";
import "./Contacto.scss";
import imagenContacto from "../../assets/img/imagen-contacto.jpg";
import emailjs from "@emailjs/browser";
// const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
// const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;

const Contacto = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [onCharge, setOnCharge] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const resetInputs = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  useEffect(() => {
    resetInputs();
  }, [success]);

  const handleSubmit = (e) => {
    setOnCharge(true);
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_51iewu3",
          "template_rx9pq5i",
          form.current,
          "NWsWaMbmiXl6Zwqmm"
        )
        .then(
          (result) => {
            setOnCharge(false);
            setSuccess(true);
            setTimeout(() => {
              setSuccess(false);
            }, 5000);
          },
          (error) => {
            setOnCharge(false);
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 5000);
          }
        );
    } catch {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <section id="contacto" className="container">
      <h2 id="title">Contacto</h2>
      {success && (
        <Alert key={"success"} variant={"success"}>
          Tu mensaje fue enviado con éxito, pronto te contactaremos.
        </Alert>
      )}
      {error && (
        <Alert key={"danger"} variant={"danger"}>
          Hubo un error al enviar tu mensaje, por favor inténtalo nuevamente
        </Alert>
      )}
      <div id="contentContainer">
        <div id="formContainer">
          {onCharge ? (
            <Spinner animation="border" variant="dark" id="spinner" />
          ) : (
            <Form ref={form} onSubmit={handleSubmit} id="form">
              <Form.Group className="mb-3">
                <Form.Label>Nombre y apellido *</Form.Label>
                <Form.Control
                  name="user_name"
                  type="text"
                  placeholder="Ingresa tu nombre y apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico *</Form.Label>
                <Form.Control
                  name="user_email"
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Teléfono de contacto *</Form.Label>
                <Form.Control
                  name="user_phone"
                  type="text"
                  placeholder="Ingresa un teléfono de contacto"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Mensaje *</Form.Label>
                <Form.Control
                  name="message"
                  type="text"
                  as="textarea"
                  rows={4}
                  placeholder="Ingresa aquí tu mensaje"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <div id="buttonContainer">
                <Button
                  size="lg"
                  variant="dark"
                  type="submit"
                  id="formButton"
                  onClick={(e) => handleSubmit(e)}
                  disabled={
                    name === "" ||
                    email === "" ||
                    phone === "" ||
                    message === ""
                  }
                >
                  Enviar
                </Button>
              </div>
            </Form>
          )}
        </div>
        <div id="imageContainer">
          <Image
            id="imagenContacto"
            src={imagenContacto}
            alt="Imagen contacto"
          />
        </div>
      </div>
    </section>
  );
};

export { Contacto };
