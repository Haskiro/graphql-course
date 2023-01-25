import { useQuery, gql } from "@apollo/client";

const App = () => {
  const GET_TOTAL_PETS = gql`
    query GetTotalPets {
      totalPets
    }
  `;
  const { loading, error, data } = useQuery(GET_TOTAL_PETS);

  return (
    <>
      <h1>My first Appollo App</h1>
      {loading ? <h2>Loading...</h2> : null}
      {error ? <h2>Error : {error.message}</h2> : null}
      {data ? <h2>totalPets : {data.totalPets}</h2> : null}
    </>
  );
};

export default App;
