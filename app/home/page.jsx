"use client"
import React, { useEffect, useState } from 'react';

function HomePage() {
  const [dbStatus, setDbStatus] = useState(null);

  useEffect(() => {
    // Call your API to check DB connection status
    const checkDbConnection = async () => {
      try {
        const response = await fetch('/api/check-connection'); // Update the API endpoint accordingly
        const data = await response.json();
        
        // Set the message from the API response
        setDbStatus(data.message);
      } catch (error) {
        console.error('Error fetching DB connection status:', error);
        setDbStatus('Error connecting to the database');
      }
    };

    checkDbConnection();
  }, []); // Empty array ensures this runs once after the first render

  return (
    <div className='mt-[90px]'>
      <h1>MongoDB Connection Status</h1>
      <p>{dbStatus}</p>
    </div>
  );
}

export default HomePage;
