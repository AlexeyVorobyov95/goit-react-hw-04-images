import { useState } from 'react';
import { GlobalStyles } from '../GlobalStyled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Container } from './App.styled';

export function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);

  const handleCilck = () => {
    setPage(prevPage => {
      return prevPage + 1;
    });
  };

  return (
    <Container>
      <GlobalStyles />
      <Searchbar clearForm={() => setPage(1)} onSabmit={setValue} />
      <ImageGallery onClick={handleCilck} page={page} value={value} />
    </Container>
  );
}
