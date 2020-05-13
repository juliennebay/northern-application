import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const INTERESTS = [
  "Your interests",
  "Development",
  "Product",
  "Marketing",
  "Sales"
];

class Form extends React.Component {
  state = { submitError: false, email: "" };

  submitForm = () => {
    if (
      this.state.email.length === 0 ||
      !this.state.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ) {
      this.setState({ submitError: true });
    }
  };

  updateEmail = event => {
    const email = event.target.value;
    console.log(this.state);
    this.setState({ email: email });
  };

  render() {
    return (
      <div className="main-pg">
        <h1 className="form-title">INTERNSHIP SIGNUP FORM</h1>
        <div className="line"></div>
        <div className="intro">
          <p>
            Prepare for your career with a Project Management, Web-Development,
            Graphic Design, or Digital Marketing Internship at Northern.
          </p>
        </div>
        <div className="form">
          <div className="input-fields">
            <div>
              {this.state.submitError ? (
                <p className="error-msg">Check your email</p>
              ) : (
                ""
              )}
              <input
                type="text"
                className={`email-input ${
                  this.state.submitError ? "error-input" : ""
                }`}
                placeholder="Your Email Address*"
                onChange={this.updateEmail}
              />
            </div>
            <select className="dropdown" required>
              {INTERESTS.map((interest, i) => (
                <option value={i !== 0 ? interest : ""}>{interest}</option>
              ))}
            </select>
          </div>
          <button onClick={this.submitForm} className-="signup">
            Sign Up Now ▸
          </button>
        </div>
      </div>
    );
  }
}
//line 56 - the option without a given value (index 0) - different css value (see dropdown: invalid)
//this only works because we put "required" on line 54, which means the value can't be empty
ReactDOM.render(<Form />, document.querySelector("#root"));
