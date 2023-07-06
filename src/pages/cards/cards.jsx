import Header from '../../components/header';
import SlideTags from '../../components/slide-tags';

import {  CardsContainer, HeaderPage, HeaderTitle, HeaderActions, MenuButton,
          GridButton, ButtonImg, SearchCards} from './cards.styles'

const Cards = () => {
  

    return (
      <>
          <Header />
          <CardsContainer>
            {/* CABEÇALHO DA PÁGINA */}
            <HeaderPage>
              <HeaderTitle>Meus cards</HeaderTitle>
              <HeaderActions>
                <SearchCards type="search" name="FilterCards" placeholder='Busque por palavras ou #tag...' />
                <MenuButton>
                  <ButtonImg src='images/icons/menu.svg' alt='Ícone de menu' />
                </MenuButton>
                <GridButton>
                  <ButtonImg src='images/icons/grid.svg' alt='Ícone de grid' />
                </GridButton>
              </HeaderActions>
            </HeaderPage>

            {/* SLIDE DE TAGS/CATEGORIAS */}
            <SlideTags />
          </CardsContainer>
      </>  
    );
  };
  
  export default Cards;