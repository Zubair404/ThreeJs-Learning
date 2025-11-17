import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'
import Contacts from './components/Contacts'
import styled from 'styled-components';
const Container = styled.div`
height: 100vh;
background-color: rebeccapurple;
scroll-snap-type: y mandatory;
overflow-y: auto;
scroll-behavior: smooth;
scrollbar-width: none;
color: white;
background: url(/img/bg.jpeg);
&::-webkit-scrollbar {
  display: none;
}
`;

const App = () => {
  return (
    <Container>
      <Hero/>
      <Who/>
      <Works/>
      <Contacts/>
    </Container>
  )
}
export default App
