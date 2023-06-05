import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginContainer,
         Sidebar,
         SidebarContainer,
         SidebarTitle,
         Link,
         LoginContent,
         LoginBox,
         LoginTitle,
         LoginSubtitle,
         FormBox,
         FormItem,
         FormLabel,
         FormInput,
         FormButton } from './login.styles'
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
          <LoginBox>
            <LoginTitle>memobox_</LoginTitle>
            <LoginSubtitle>Ainda não tem uma conta? <a href="#">Comece de graça</a> 😎</LoginSubtitle>
            <FormBox onSubmit={handleSubmit}>
                <FormItem>
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <FormInput
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </FormItem>
                <FormItem>
                    <FormLabel htmlFor="password">Senha:</FormLabel>
                    <FormInput
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    />
                </FormItem>
                <Link to="#">Esqueci minha senha</Link>
                <FormButton type="submit">Acessar</FormButton>
            </FormBox>
          </LoginBox>
        </LoginContent>
    </LoginContainer>
  );
};

export default Login;