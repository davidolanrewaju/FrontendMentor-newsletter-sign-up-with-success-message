/* eslint-disable react/prop-types */
import './Thanks.css';

const Thanks = (props) => {
  const {submittedEmail} = props; //Call the prop for getting the email from the "App" component
  return (
    <div className="thanks-container">
      <img src="src\assets\images\icon-success.svg" alt="verified-icon" />
      <h1>Thanks for subscribing!</h1>
      <p>A confirmation email has been sent to <b>{submittedEmail}</b>. Please open it and click the button inside to confirm your subscription</p>

      <button>Dismiss message</button>
    </div>
  )
}

export default Thanks