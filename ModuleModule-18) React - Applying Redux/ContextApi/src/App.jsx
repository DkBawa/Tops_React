import { ThemeProvider, useTheme } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

// Main Content Component
const MainContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <ThemeToggle />
    </div>
  );
};

export default App;

