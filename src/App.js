
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
          about: "",
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          setData(prevState => [...prevState, values])
        }}
      >
        {(props) => (
          <Form className='inputs'>
            <Field className="inp" name="username" />
            <Field className="inp" name="password" type="password" />
            <Field className="inp" name="email" type="email" />
            <Field className="inp" name="about" type="text" />
            <Field className="inp" name="phoneNumber" type="number" />
            <button id='btn' type='submit'> Sign in</button>
          </Form>
          )
        }
       </Formik>
       {
        <ul>
          {data.map((element,index) => {
            return (
              <li key={index}>
                <p>{element.username}</p>
                <p>{element.password}</p>
                <p>{element.email}</p>
                <p>{element.about}</p>
                <p>{element.phoneNumber}</p>
              </li>
            )
          })}
        </ul>
      }
    </div>
  );
}

export default App;
