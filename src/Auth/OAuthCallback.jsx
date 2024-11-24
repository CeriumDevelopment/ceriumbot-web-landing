import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OAuthCallback = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      // Send code to backend for authentication
      fetch(`/auth/callback?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Callback response:', data); // Log to check
          if (data.success) {
            console.log('Redirecting to dashboard...');
            window.location.href = "/dashboard";
          } else {
            setError("Failed to authenticate with Discord.");
          }
        })
        .catch((err) => setError("Error while handling OAuth callback."));
    }
  }, [navigate]);

  return (
    <div>
      {error ? <p>{error}</p> : <p>Logging you in...</p>}
    </div>
  );
};

export default OAuthCallback;
