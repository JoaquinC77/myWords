import React, { useRef, useState } from 'react'
import { Button, Form } from './styles';
import PropTypes from 'prop-types';

const SearchForm = ({setData, setLoandig, setError}) => {
  const [filter, setFilter] = useState('');
  const formRef = useRef(null);


  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoandig(true);

    if(filter.trim() === ""){
      setError(true);
      setLoandig(false);
      formRef.current.reset();
      return;
    }
    setError(false);

    const dataFetch = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${filter}`);
    const dataJson = await dataFetch.json();
    setLoandig(false);
    setData(dataJson[0]);
    setFilter('');
    formRef.current.reset();
  }

  return (
    <>
      <Form onSubmit={onSubmitForm} ref={formRef}>
        <div className="w-75 py-4">
          <label htmlFor="search"></label>
          <input 
            id="search" 
            type="text"
            placeholder="Write a word"
            onChange={e => setFilter(e.target.value)}  
          />
        </div>
        <div className="w-50 ">
          <Button type="submit">
            Buscar
          </Button>
        </div>
      </Form>
    </>
  )
}

SearchForm.prototype = {
  setData: PropTypes.func.isRequired,
  setLoandig: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
}

SearchForm.defaultProps = {
  setData: null,
  setLoandig: null,
  setError: null,
}

export default SearchForm
