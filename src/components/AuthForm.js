import { useState } from "react";

function AuthForm({ submit, label }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(form);
  };

  return (
    <div className="AuthForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <input type="submit" value={label} />
      </form>
    </div>
  );
}

export default AuthForm;
