import Navigation from "./Navigation/Nav"
import Products from "./Products/Products"
import Recommended from "./Recommended/Recommended"
import Category from "./SideBar/Category/Category"
import Colors from "./SideBar/Colors/Colors"
import Price from "./SideBar/Prices/Price"


function App() {

  return(
    <>
    <Navigation/>
    <Recommended/>
    <Products/>
    <Category/>
    <Colors/>
    <Price/>
    </>
  )
}

export default App
