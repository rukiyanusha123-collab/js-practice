import UserCard from "./user";
import withBorder from "./withBorder";
import "./App.css"

const TextDeco=withBorder(UserCard);
function App(){
  return(
    <>
    <TextDeco/>
    </>
  )
}
export default App;