import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Wrapper } from './styledComponent/Wrapper';
import dotenv from 'dotenv';
import styled from 'styled-components';
import Search from './components/Search';
import Pictures from './components/pictures/Pictures';
import PicturesInfo from './components/picturesInfo/PicturesInfo';
import Loader from './components/Loader';
import Error from './components/Error';
import axios from 'axios';

dotenv.config();

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 210px;
  font-size: calc(40px + 2vmin);
  color: #5fa8d3;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

const App = ({ history }) => {
  const [pictures, setPictures] = useState([]);
  const [currentDetails, setCurrentDetails] = useState(null);
  const [query, setQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let API_URL = 'https://api.unsplash.com/search/photos/?page=1&per_page=30';
  const APP_ID = process.env.REACT_APP_CODE;

  const getPictures = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(
        `${API_URL}&query=${query}&client_id=${APP_ID}`,
      );

      if (response.status === 200) {
        setPictures(response.data.results);
        console.log(response);
      }
    } catch (error) {
      setIsError(true);
    }
    setQuery(query);
    setIsLoading(false);
  };

  const handleSubmit = event => {
    history.push('/pictures');
    event.preventDefault();
    getPictures();
    setQuery('');
  };

  const handleOnChange = event => {
    setQuery(event.target.value);
  };

  const handleSelect = pics => {
    setCurrentDetails(pics);
    console.log(pics);
  };

  return (
    <>
      <Wrapper ctr>
        <Header>
          <Route
            exact
            path='/'
            render={() => (
              <>
                <Title>Find Cool Pictures</Title>
                <Search
                  query={query}
                  handleSubmit={handleSubmit}
                  handleOnChange={handleOnChange}
                />
              </>
            )}
          />
          <Route
            path='/pictures'
            render={() => (
              <>
                <Pictures
                  query={query}
                  pictures={pictures}
                  handleSelect={handleSelect}
                  isLoading={isLoading}
                />
                <Loader query={query} isLoading={isLoading} />
                <Error isError={isError} />
              </>
            )}
          />
          <>
            <Route
              path='/picture/:id'
              render={() => <PicturesInfo currentDetails={currentDetails} />}
            />
          </>
        </Header>
      </Wrapper>
    </>
  );
};

export default withRouter(App);
