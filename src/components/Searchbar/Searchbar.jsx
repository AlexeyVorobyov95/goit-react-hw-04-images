import { useState } from 'react';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai/index';
import PropTypes from 'prop-types';

export function Searchbar({ clearForm, onSabmit }) {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Please enter a value in the search');
    }
    onSabmit(value);
    clearForm();
    setValue('');
  };

  return (
    <HeaderSearchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <AiOutlineSearch
            style={{ fill: `black`, width: `100%`, height: `100%` }}
          />
          <span>Search</span>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </HeaderSearchbar>
  );
}

Searchbar.propTypes = {
  onSabmit: PropTypes.func.isRequired,
};
