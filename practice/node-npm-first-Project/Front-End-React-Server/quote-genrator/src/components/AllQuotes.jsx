import React from "react";
import { Link } from "react-router-dom";
function AllQuotes() {
  const [quotes, setQuotes] = useState([]);

  // Function to fetch all quotes
  const getAllQuotes = () => {
    fetch("http://localhost:3000/getAllQuotes") // Assuming this is your Express route for getting all quotes
      .then((response) => response.json())
      .then((data) => setQuotes(data))
      .catch((error) => console.error("Error fetching quotes:", error));
  };

  return (
    <div>
      <button onClick={getAllQuotes}>Get All Quotes</button>
      <Link to="/all-quotes">View All Quotes</Link> {/* Link to the new page */}
      <h2>All Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <Quote quote={quote} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllQuotes;
