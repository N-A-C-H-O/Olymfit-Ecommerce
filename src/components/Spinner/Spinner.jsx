import Spinner from 'react-bootstrap/Spinner';

export const SpinnerComp = () => {
  return (
    <Spinner animation="border" role="status" className="d-block mx-auto my-5">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}