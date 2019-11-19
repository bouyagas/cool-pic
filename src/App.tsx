import React from "react";
import { Route, withRouter } from "react-router-dom";
import { Wrapper } from "./styledComponent/Wrapper";
import dotenv from "dotenv";
import styled, { StyledComponent } from "styled-components";
import Search from "./components/Search";
import Pictures from "./components/pictures/Pictures";
import PicturesInfo from "./components/picturesInfo/PicturesInfo";
import Loader from "./components/Loader";
import Error from "./components/Error";
import axios, { AxiosResponse } from "axios";

dotenv.config();

const Header: StyledComponent<"header", any, {}, never> = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title: StyledComponent<"h2", any, {}, never> = styled.h2`
  margin-top: 210px;
  font-size: calc(40px + 2vmin);
  color: #5fa8d3;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

type formE = React.FormEvent<HTMLFormElement>;
type changeE = React.ChangeEvent<HTMLInputElement>;

interface Props {
  history: any;
}

export interface Picture {
  id: number;
  urls: string | null | any;
  user: string | null | any;
  alt_description: string | null | any;
  (prevState: null): null;
}

interface ServerData {
  results: Picture[];
  status: number;
}

const App: React.FC<Props> = ({ history }): React.ReactElement => {
  const [pictures, setPictures] = React.useState<Picture[]>([]);
  const [query, setQuery] = React.useState<string>("Science");
  const [currentDetails, setCurrentDetails] = React.useState<any | null>(null);
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    getPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let API_URL: string =
    "https://api.unsplash.com/search/photos/?page=1&per_page=30";

  const APP_ID: string | undefined = process.env.REACT_APP_CODE;

  const getPictures = async (): Promise<void> => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response: AxiosResponse<ServerData> = await axios.get<ServerData>(
        `${API_URL}&query=${query}&client_id=${APP_ID}`
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

  const handleSubmit = (event: formE): void => {
    history.push("/pictures");
    event.preventDefault();
    getPictures();
    setQuery("");
  };

  const handleOnChange = (event: changeE): void => {
    setQuery(event.target.value);
  };

  const handleSelect = (pics: Picture): void => {
    setCurrentDetails(pics);
    console.log(pics);
  };

  return (
    <React.Fragment>
      <Wrapper ctr>
        <Header>
          <Route
            exact
            path="/"
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
            path="/pictures"
            render={() => (
              <>
                <Pictures
                  query={query}
                  pictures={pictures}
                  handleSelect={handleSelect}
                />
                <Loader query={query} isLoading={isLoading} />
                <Error isError={isError} />
              </>
            )}
          />
          <>
            <Route
              path="/picture/:id"
              render={() => <PicturesInfo currentDetails={currentDetails} />}
            />
          </>
        </Header>
      </Wrapper>
    </React.Fragment>
  );
};

export default withRouter(App);
