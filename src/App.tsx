import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';

function App() {
  return (
    <div>
      <div>
        <Button>Кнопка</Button>
        <Button size="xl">Кнопка</Button>
      </div>

      <Input
        name="password"
        label="Ваш пароль"
        placeholder="Пароль"
      />
    </div>
  );
}

export default App;
