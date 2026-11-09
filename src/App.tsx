import { RouterProvider } from 'react-router';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';
import router from './router';

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

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
