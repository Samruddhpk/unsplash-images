import { useGlobalContext } from "./context";
import ThemeToggle from "./components/ThemeToggle";
import SearchForm from "./components/SearchForm";
import Gallery from "./components/Gallery";

const App = () => {
  const { greeting } = useGlobalContext();
  console.log(greeting);
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};
export default App;
