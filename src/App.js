import logo from './logo.svg';
import './App.css';
import MyComponent from './component';
import { useState } from 'react';

function App() {
  const [pageInfo, setPageName] = useState('')
  const [myInfo, setMyInfo] = useState('')
  const navBtnClicked = (pageName)=> {
    setPageName(pageName)
    setMyInfo(pageName === 'home' ? 'My name is Tanvir' : 'I am a Web Developer')
  }
  return (
    <div class="App">
      <button onClick={()=> navBtnClicked('home')}>Home</button>
      <button onClick={()=> navBtnClicked('contact')}>Contact</button>
      <MyComponent pageInformation ={pageInfo} myInformation ={myInfo} />
    </div>
  );
}

export default App;
