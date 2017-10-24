# learning-nodejs
Learning Node.JS using Express.

<h2>List of apps</h2>
<ul>
  <li>
    <h3>Simple Todo List app</h3>
    <p>This app uses `cookie-session` node module to maintain the session and
                creates a simple todo app with add & delete operations.</p>
  </li>
  <li>
      <h3>Understanding Socket.io</h3>
      <p>This little exercise app uses `socket.io` node module. Giving an overview of
      how to send and receive messages and custom data between client & server using socket.io </p>
      <i>See the server code in - `/bin/www` file.</i>
    </li>
    <li>
      <h3>Real-time Chat client with Socket.io</h3>
      <p>This app just uses again a `socket.io` node module and does these tasks:
        <ul>
          <li>Ask for the Name with a dialog box when the person connects to the website OR  (optionally) they can change via settings form anytime</li>
          <li>Show the update in the chat window to everyone other then the person that the person just connected (e.g. "gerry joined the chat!")</li>
          <li>When we type a message, it’s immediately displayed in the browser under the form.</li>
        </ul>
      </p>
    </li>
</ul>

<h2>Installation Instructions:</h2>
<ol>
  <li>Install all the dependencies by running <pre>npm install</pre></li>
  <li>Just run <pre>npm start</pre></li>
  <li>Access the apps by going to the <pre><a href="http://localhost:3000">http://localhost:3000/</a></pre></li>
</ol>
