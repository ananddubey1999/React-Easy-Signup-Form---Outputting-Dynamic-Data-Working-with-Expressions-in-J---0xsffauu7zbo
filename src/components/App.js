import { validateFormData } from './utils/validation';

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    consent: false
  });

  // Used to store errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, checked } = e.target;
    setFormData({
      ...formData,
      [id]: id === "consent" ? checked : value
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
      />
      {errors.name && <div>{errors.name}</div>}

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        value={formData.email}
        onChange={handleChange}
        type="text"
      />
      {errors.email && <div>{errors.email}</div>}

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        value={formData.password}
        onChange={handleChange}
        type="password"
      />
      {errors.password && <div>{errors.password}</div>}

      <label htmlFor="consent">
        <input
          id="consent"
          checked={formData.consent}
          onChange={handleChange}
          type="checkbox"
        />
        I agree to the Terms and Conditions
      </label>
      {errors.consent && <div>{errors.consent}</div>}

      <button>Signup</button>
    </form>
  );
};

export default App;
