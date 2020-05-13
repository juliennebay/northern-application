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
  state = {
    submitted: false,
    submitError: false,
    showThanks: false,
    email: "",
    interest: ""
  };

  submitForm = () => {
    if (
      this.state.email.length === 0 ||
      !this.state.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
    ) {
      this.setState({ submitError: true });
    } else {
      console.log(
        "email address: ",
        this.state.email,
        "interest: ",
        this.state.interest
      );
      this.setState({ submitted: true });
      setTimeout(() => {
        this.setState({ showThanks: true });
      }, 2000);
    }
  };

  updateEmail = event => {
    const email = event.target.value;
    this.setState({ email: email });
  };

  updateInterest = event => {
    const interest = event.target.value;
    this.setState({ interest: interest });
  };

  render() {
    return (
      <div className="main-pg">
        <h1 className="form-title">INTERNSHIP SIGNUP FORM</h1>
        <div className="line"></div>

        {this.state.showThanks ? (
          <div className="thanks-pg">
            <h2 className="thanks-title">Thanks for your interest!</h2>
            <p className="thanks-msg">
              We will review your application and contact you for additional
              information should your background and experience meet the
              requirements of one of our openings.
            </p>
          </div>
        ) : (
          <>
            <div className="intro">
              <p>
                Prepare for your career with a Project Management,
                Web-Development, Graphic Design, or Digital Marketing Internship
                at Northern.
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
                <select
                  className="dropdown"
                  required
                  onChange={this.updateInterest}
                >
                  {INTERESTS.map((interest, i) => (
                    <option value={i !== 0 ? interest : ""}>{interest}</option>
                  ))}
                </select>
              </div>
              <button onClick={this.submitForm} className-="signup">
                {this.state.submitted ? "Submitting..." : "Sign Up Now ▸"}
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

//line 76 - the option without a given value (index 0) - different css value (see dropdown: invalid)
//this only works because we put "required", which means the value can't be empty
ReactDOM.render(<Form />, document.querySelector("#root"));
