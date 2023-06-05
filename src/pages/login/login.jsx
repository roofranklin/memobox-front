import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginContainer,
         Sidebar,
         SidebarContainer,
         SidebarTitle,
         LoginContent } from './login.styles'
import Logo from '../../components/logo-branca'
import Testimonials from '../../components/testimonials'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário com o email e a senha fornecidos
    // Por exemplo, você pode fazer uma requisição para um servidor backend
    // para verificar as credenciais do usuário e redirecioná-lo para a página de destino.
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/cards');
  };

  return (
    <LoginContainer>
        <Sidebar>
            <SidebarContainer>
                <Logo />
                <SidebarTitle>Faça como dezenas de estudantes_</SidebarTitle>
                <Testimonials />
            </SidebarContainer>
        </Sidebar>
        <LoginContent>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </LoginContent>
    </LoginContainer>
  );
};

export default Login;