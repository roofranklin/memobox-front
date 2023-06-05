import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { LoginContainer,
         Sidebar,
         SidebarContainer,
         SidebarTitle,
         Testimonial,
         LoginContent } from './login.styles'
import Logo from '../../components/logo-branca'

const handleDragStart = (e) => e.preventDefault();

const testimonials = [
    <Testimonial key="01" onDragStart={handleDragStart} role="presentation"></Testimonial>,
    <Testimonial key="02" onDragStart={handleDragStart} role="presentation"></Testimonial>,
    <Testimonial key="03" onDragStart={handleDragStart} role="presentation"></Testimonial>,
];

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1.5 },
};

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
                <AliceCarousel
                    mouseTracking
                    items={testimonials}
                    responsive={responsive}
                    autoPlayStrategy="default"
                    animationType="slide"
                    animationDuration={1000}
                    disableButtonsControls
                />
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