import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import Function from './components/Function';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className="App">
    <ParentComponent></ParentComponent>
    {/*<EventBind></EventBind>
    <Function></Function>
    <ClassClick></ClassClick>*/}
      {/*<Counter></Counter>*/}
      {/*<Greet name="Bruce" heroName="Batman">
        <p>Children props</p>
      </Greet>
      <Greet name="Tesla" heroName="Tosl">
        <button>Action</button>
      </Greet>*/}
      {/*<Greet name="Lee" heroName="Sin"/>
     <Welcome name="WLee" heroName="WSin1"/>
     <Welcome name="WLee" heroName="WSin2"/>
     <Welcome name="WLee" heroName="WSin3"/>
     <Message></Message>
      {/*<Hello/>*/}
    </div>
  );
}

export default App;
