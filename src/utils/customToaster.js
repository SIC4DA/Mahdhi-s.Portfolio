let isDarkMode = localStorage.getItem("theme") === "dark";

window.addEventListener("storage", () => {
  isDarkMode = localStorage.getItem("theme") === "dark";
  console.log({ isDarkMode, test: localStorage.getItem("theme") === "dark" });
});

const textColor = isDarkMode ? "#fff" : "#222222";
const bgColor = isDarkMode ? "#030712" : "#f7f7f9";
const borderColor = isDarkMode ? "#1a1a1a" : "#f7f7f9";

export const globalToasterOptions = {
  duration: 2500,
  style: {
    padding: "16px",
    minWidth: "fit-content",
    maxWidth: "unset",
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "capitalize",
    color: textColor,
    backgroundColor: bgColor,
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    border: `2px solid ${borderColor}`,
  },
  iconTheme: {
    secondary: "#fff",
  },
  error: {
    style: {
      backgroundColor: bgColor,
    },
    iconTheme: {
      primary: "#D14747",
      secondary: "#fff",
    },
  },
};
