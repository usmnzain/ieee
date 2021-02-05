import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "../../styles/Home.module.css";
import React from "react";

/** Components */
const Card = (props) => (
  <div className={styles.contactCard}>
    {/*<div className="waves">
    </div>*/}
    {props.children}
  </div>
);

const Form = (props) => <form className={styles.form}>{props.children}</form>;

const TextInput = (props) => (
  <div className={styles.textInput}>
    <label
      className={props.focus || props.value !== "" ? styles.labelFocus : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <input
      className={props.focus || props.value !== "" ? styles.inputFocus : ""}
      type="text"
      name={props.name}
      value={props.value}
      placeholder={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
);

const TextArea = (props) => (
  <div className={styles.textArea}>
    <label
      className={props.focus || props.value !== "" ? styles.labelFocus : ""}
      htmlFor={props.name}
    >
      {props.label}
    </label>
    <textarea
      className={props.focus || props.value !== "" ? styles.inputFocus : ""}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  </div>
);

const Button = (props) => (
  <button className={styles.button}>{props.children}</button>
);

/** Root Component */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: {
        name: "name",
        label: "Name",
        value: "",
        focus: false,
      },
      email: {
        name: "email",
        label: "Email",
        value: "",
        focus: false,
      },
      message: {
        name: "message",
        label: "Message",
        value: "",
        focus: false,
      },
    };
  }

  handleFocus(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = true;
    this.setState({ [name]: state }, () => {
      console.log(state);
    });
  }

  handleBlur(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.focus = false;
    this.setState({ [name]: state }, () => {
      console.log(state);
    });
  }

  handleChange(e) {
    const name = e.target.name;
    const state = Object.assign({}, this.state[name]);
    state.value = e.target.value;
    this.setState({ [name]: state }, () => {
      console.log(state);
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <Card>
          <p className={styles.subtitle}>Send us a message</p>
          <Form>
            <TextInput
              {...name}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onChange={this.handleChange.bind(this)}
            />
            <TextInput
              {...email}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onChange={this.handleChange.bind(this)}
            />
            <TextArea
              {...message}
              onFocus={this.handleFocus.bind(this)}
              onBlur={this.handleBlur.bind(this)}
              onChange={this.handleChange.bind(this)}
            />
            <Button>Send</Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.about} style={{ marginBottom: 50 }}>
        <p className={styles.title}>Contact Us</p>
      </div>

      <div className={styles.contactContainer}>
        <App />
      </div>

      <Footer />
    </div>
  );
}
