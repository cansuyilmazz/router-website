import { useState } from "react";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formValues;
    alert(
      `Username: ${username}
      Email:${email}
      Password: ${password} `
    );
  };
  const handleFormValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <h1 className="text-center m-4">CONTACT FORM</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={handleFormValues}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your Password"
            onChange={handleFormValues}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-danger ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
