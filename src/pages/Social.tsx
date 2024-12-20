import React from "react";

const SocialCard: React.FC = () => {
  const handleButtonClick = (platform: string) => {
    // Replace with your platform-specific URLs
    const urls: Record<string, string> = {
      Discord: "https://discord.com/",
      Instagram: "https://instagram.com/",
      Memberships: "/memberships", // Example local route
      Linkedin: "https://linkedin.com/",
      YouTube: "https://youtube.com/",
      Facebook: "https://facebook.com/",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <div
      style={{
        backgroundColor: "#000", // Black background for the whole page
        minHeight: "100vh", // Ensure it covers the full height of the page
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "90%", // Increase width to 90% of the viewport
          maxWidth: "800px", // Increase max width to 800px
          padding: "40px", // Increase padding for a larger card
          border: "2px solid #333",
          borderRadius: "10px",
          backgroundColor: "#555", // Grey card color
          textAlign: "center",
          color: "#fff",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Slightly larger box shadow
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Student Chapter Socials</h2>
        <div style={{ display: "grid", gap: "20px" }}>
          {["Discord", "Instagram", "24/25 Memberships", "Linkedin", "YouTube", "Facebook"].map(
            (platform) => (
              <button
                key={platform}
                onClick={() => handleButtonClick(platform)}
                style={{
                  padding: "12px 25px", // Larger padding for buttons
                  fontSize: "18px", // Larger text size for buttons
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#bba53d",
                  color: "#000", // Black text for contrast
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
                onMouseOver={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor = "#99892f")
                }
                onMouseOut={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor = "#bba53d")
                }
              >
                {platform}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
