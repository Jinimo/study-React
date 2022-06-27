import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집'; 
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className='black-nav'>    
        <div style={ {color: 'green', fontSize: '30px'}}> 현진 개발 Blog </div> 
      </div>
      <img src = {logo}/>
      <h3> { 함수() }  </h3>
      <h4> { posts }  </h4>

    </div>
  );
}
 
export default App;
