import React, { useState } from 'react';
import FormErrors from './FormErrors/FormErrors';
import Link from '../Link';
import { useForm } from 'react-hook-form';
import styles from './contactForm.module.css';

const encode = data => {
  const formData = new FormData();

  for(const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
}

export default function App() {
  const [ msg, setMsg ] = useState(null);
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur"
  });
  const onSubmit = ( data, e ) => {
    //preparing form data for Netlify Forms from react-hook-form validated data
    const formData = {
      ...data,
      "form-name": e.target.name,
      "bot-field": e.target["bot-field"].value
    };
    fetch('/', {
      method: 'POST',
      body: encode(formData) //encode data as query string
    })
    .then(() => {
      e.target.reset();
      setMsg('Thank you for your submission!');
    })
    .catch(error => {
      setMsg('Ooops something went wrong, please try again later!');
    })
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field">
      <div hidden aria-hidden="true">
        <label>
          Don’t fill this out if you're human:
          <input name="bot-field" />
        </label>
      </div>
      <label htmlFor="fullName">Full name:</label>
      <input
        type="text"
        name="fullName"
        ref={register({
          required: "Please, enter your full name",
          minLength: {
            value: 2,
            message: "Min length is 2 characters"
          },
          maxLength: {
            value: 80,
            message: "Max length is 80 characters"
          }
        })}
      />
      {errors.fullName && <FormErrors>{errors.fullName.message}</FormErrors>}

      <label htmlFor="email" >Email:</label>
      <input
        type="text"
        name="email"
        ref={register({
          required: "Please, enter your email address",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address"
          }
        })}
      />
      {errors.email && <FormErrors>{errors.email.message}</FormErrors>}

      <label htmlFor="message">Your message:</label>
      <textarea
        name="message"
        ref={register({required: "Please, enter your message"})}
      />
      {errors.message && <FormErrors>{errors.message.message}</FormErrors>}

      <input
        type="checkbox"
        name="privacy"
        ref={register({required: "Please, you need to agree to continue" })}
      />
      <span className={styles.privacyText}>In compliance with the Italian Dlgs. 196/2003, I hereby authorize you to use and process my personal details. For more information on how see the <Link to="/privacy">Privacy Policy</Link>.*</span>
      {errors.privacy && <FormErrors>{errors.privacy.message}</FormErrors>}

      <div className={styles.submit}>
        <button type="submit">Submit</button>
        {msg ? <span className={styles.message}>{msg}</span> : null}
      </div>
    </form>
  );
}
