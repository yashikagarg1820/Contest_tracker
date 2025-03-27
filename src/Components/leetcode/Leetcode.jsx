import React, { useEffect, useState } from "react";
import axios from "axios";

const LeetCodeContests = () => {
  const [contests, setContests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeetCodeContests = async () => {
      try {
        const response = await axios.post(
          "https://leetcode.com/graphql",
          {
            query: `
              query {
                contestUpcomingContests {
                  title
                  titleSlug
                  startTime
                  duration
                }
              }
            `,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Cookie": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTMzODQxMTYiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJhbGxhdXRoLmFjY291bnQuYXV0aF9iYWNrZW5kcy5BdXRoZW50aWNhdGlvbkJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiI3MjZkMjQ5ZDdkN2E2MjdkOWVhYWQ4ZWE1ZTc0ZWE1NTc3OTk2MDk1ZjY0YWU2MzJkMzE4NzE2MDY1ZTI4NGQ3Iiwic2Vzc2lvbl91dWlkIjoiOWYxNDIyMzYiLCJpZCI6MTMzODQxMTYsImVtYWlsIjoieWFzaGlrYWdhcmcxODIwQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoieWFzaGlrYV8xODIwIiwidXNlcl9zbHVnIjoieWFzaGlrYV8xODIwIiwiYXZhdGFyIjoiaHR0cHM6Ly9hc3NldHMubGVldGNvZGUuY29tL3VzZXJzL2RlZmF1bHRfYXZhdGFyLmpwZyIsInJlZnJlc2hlZF9hdCI6MTc0Mjk3MTcyMSwiaXAiOiIxMTEuMjIzLjI4LjU0IiwiaWRlbnRpdHkiOiIzZmEzMWI1MmRkNmViYzUxN2U1NDkyZDQzZDc3ZTYxYyIsImRldmljZV93aXRoX2lwIjpbIjBkNzhiYmI4MGY5YTFjODZjOTFkMjk2Y2NmMjBlZjJhIiwiMTExLjIyMy4yOC41NCJdLCJfc2Vzc2lvbl9leHBpcnkiOjEyMDk2MDB9._G1L6xgBex5SMMR5XYw8nMaY9820GSUmwvOFuuU0WHo", // Replace with your session cookie
            },
          }
        );

        if (response.data && response.data.data) {
          setContests(response.data.data.contestUpcomingContests);
        } else {
          setError("No contests found.");
        }
      } catch (err) {
        setError("Error fetching contests.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeContests();
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">LeetCode Contests</h1>
      {loading ? (
        <p className="text-center text-lg">Fetching contests...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : contests.length === 0 ? (
        <p className="text-center">No upcoming contests found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contests.map((contest, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="font-bold">{contest.title}</h3>
              <p>📅 {new Date(contest.startTime * 1000).toLocaleString()}</p>
              <p>⏳ Duration: {(contest.duration / 3600).toFixed(2)} hrs</p>
              <a
                href={`https://leetcode.com/contest/${contest.titleSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline mt-2 block"
              >
                View Contest
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeetCodeContests;
