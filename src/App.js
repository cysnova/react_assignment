import Main from "./components/Main/Main";
import data from "./assets/data/profileData.json";
import "./App.css";

function App() {
  const mainElements = data.map((profile) => (
    <Main key={profile.index} {...profile} />
  ));

  return (
    <div class="container">
      <div className="profile-list">{mainElements}</div>
    </div>
  );
}

export default App;
