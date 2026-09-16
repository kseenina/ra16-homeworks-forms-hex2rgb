import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState('');
  const [rgb, setRgb] = useState('');
  const handleInput = e => {
    const value = e.target.value;
    setColor(value);

    if (value.length < 7) {
      setError('');
      setRgb('');
      return;
    }

    const isValid = /^#[0-9A-Fa-f]{6}$/.test(value);

    if(isValid) {
      const r = parseInt((value.slice(1, 3)), 16);
      const g = parseInt((value.slice(3, 5)), 16);
      const b = parseInt((value.slice(5, 7)), 16);
      setRgb('rgb(' + r + ', ' + g + ', ' + b + ')');
      document.body.style.backgroundColor = value;
      setError('');
    } else {
      setRgb('');
      setError('Ошибка!'); 
    }
  }
  
  return(
    <label htmlFor="colorInput" className="container">
      <input type="text" className="input-field" id="colorInput" placeholder="Введите код цвета..." value={color} onChange={handleInput} />
      <span className="result" id="result">{rgb ? rgb : error}</span>
    </label>
  );
}

export default App
