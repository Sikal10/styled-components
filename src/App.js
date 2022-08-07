import Header from "./components/Header/Header";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/ThemeProvider";
import GlobalStyles from "./styles/GlobalStyles";
import Card from "./components/Card/Card";
import content from "./data";
import {Container} from "./styles";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Header />
        <Container>
            {content.map((item) => <Card key={item.id} item={item} />)}
        </Container>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
