const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [attendees, setAttendees] = useState(null);
  const [dietary, setDietary] = useState("None");
  const [additional, setAdditional] = useState("No");

  const response = document.getElementById("response");

  return (
    <div id="container">
      <h1>Event RSVP Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          response.innerHTML = `
			      <h2>RSVP Submitted!</h2>
			      <p><span class="field">Name:</span> ${name}</p>
			      <p><span class="field">Email:</span> ${email}</p>
			      <p><span class="field">Number of attendees:</span> ${attendees}</p>
			      <p><span class="field">Dietary preferences:</span> ${dietary}</p>
			      <p><span class="field">Bringing additional guests:</span> ${additional}</p>
		      `;
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="attendees">Number of Attendees:</label>
        <input
          id="attendees"
          type="number"
          min="1"
          required
          onChange={(e) => setAttendees(e.target.value)}
        />
        <label htmlFor="dietary">Dietary Preferences:</label>
        <input
          id="dietary"
          type="text"
          onChange={(e) => setDietary(e.target.value)}
        />
        <label htmlFor="additional">Bringing additional Guests?:</label>
        <input
          id="additional"
          type="checkbox"
          onChange={(e) => {
            if (e.target.checked) {
              setAdditional("Yes");
            } else {
              setAdditional("No");
            }
          }}
        />
        <button type="submit">Submit RSVP</button>
      </form>
      <div id="response"></div>
    </div>
  );
}