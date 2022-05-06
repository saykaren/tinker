import "../Styling/App.css";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">Tinker World</header>
      <main>Here is the main event</main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
