import { useRef, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import SearchForm from '../components/SearchForm';
import Spinner from '../components/Spinner';

const Container = styled.main`
  width: 100%;
  height: 100%;
  min-height: 90vh;
`;

export default function Home() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loandig, setLoandig] = useState(false);

  return (
    <>
        <Container>
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-xs-10 col-sm-10 col-md-7 col-lg-7">
                <div className="d-flex justify-content-center py-3">
                  <h1>My Dictionary</h1>
                </div>
                <div className="container-form mb-5">
                  <SearchForm 
                    data={data} 
                    setData={setData} 
                    setLoandig={setLoandig}
                    setError={setError}
                  />
                </div>
              </div>

              <div className="col-sm-10">
                {loandig && (<Spinner />)}
                {error ? (
                  <div className="error">You must enter at least one word</div>
                ) : (
                  <Card data={data} />
                )}
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}
