import './App.css';

function App() {
  return (
    <div className="App">
     
      <h2>Архитектура React</h2>

      <img src="react.png" className="App-logo" />

      <h2>Hello, React!</h2>

      <div className='mainInfo'>
        <p>ФИО: Смольянинов Олег Викторович</p>
        <p>Тел.: 8-961-035-34-41</p>
        <p>Почта: oleg__smol@mail.ru</p>
      </div>

      <div className='mainSity'>
        <p>Город: Липецк</p>
        <p>Число жителей: 496,45тыс.</p>
        <img src="Flag_of_Lipetsk.png" className="App-logo" />
        <p>Страна: Россия</p>
        <img src="fladRF.png" className="App-logo" />
      </div>

    </div>
  );
}

export default App;
