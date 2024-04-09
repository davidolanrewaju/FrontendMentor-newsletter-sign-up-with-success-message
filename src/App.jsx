import { useState } from "react";
import Thanks from "./components/Thanks";
import Content from "./components/Content";
import Form from "./components/Form";
import Image from "./components/Image";
import "./App.css";

function App() {
  //State to render the thanks page on form submit
  const [thanks, setThanks] = useState(false);
  //State to get the email submitted from the forms component passed as props
  const [submittedEmail, setSubmittedEmail] = useState('');

  /*Function that will be passed as prop to "Form" component to get the email submitted 
  and to check when the form is submitted so we can change view */
  const handleFormSubmit = (email) => {
    setThanks(true);
    setSubmittedEmail(email);
  };

  return (
    <>
      {thanks ? (
        <Thanks submittedEmail={submittedEmail}/>//Pass the gotten email to the thanks component, so we can display it
      ) : (
        <div className="container">
          <div className="main-container">
          <div className="content-container">
            <Content />
             <Form onSubmit={handleFormSubmit} /> {/*Pass props to Form component to know when the form is submitted and to get the email that was submitted */}
          </div>
          <div className="img-container">
            <Image />
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default App;
