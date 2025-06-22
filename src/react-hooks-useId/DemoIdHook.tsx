import './App.css';
import Email from './components/Email';

function DemoIdHook() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Hosting</title>
      </header>
      <h1>Revolutionizing Website Performance</h1>
      <p>
        <span style={{ fontWeight: 'bold' }}>1. Enhanced User Experience:</span> Elevate user satisfaction to new
        heights. Fiber Hosting's ability to manage complex UI updates with finesse translates to smoother animations,
        improved interactivity, and a delightful browsing journey for your audience.
      </p>

      <p>
        <span style={{ color: 'red' }}>Enter Email to get more information:</span>
      </p>
      <Email />

      <p>
        <span style={{ fontWeight: 'bold' }}>Join the Fiber Revolution Today!</span>
        <br />
        Embark on a journey towards unparalleled website performance with Fiber Hosting from hosting9019012.com.
        Experience the power of React Fiber technology and elevate your online presence to new heights. Don't let slow
      </p>
      <p>
        <span style={{ color: 'red' }}>Do you want to subscribe and get the latest news?</span>
      </p>
      {/* If we click on the label for this email the first email input is focused because they both have the same id */}
      <Email />
      <br />
      <br />
    </div>
  );
}

export default DemoIdHook;
