import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';

const LIST_LAUNCHES = gql`
  query ListLaunches($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      mission_name
    }
  }
`;
const PAGE_SIZE = 10;
const total_items = 187;
const totalPage = Math.ceil(total_items / PAGE_SIZE);
console.log('total page=' + totalPage);

export const SpaceXDemo = () => {
  const [page, setPage] = useState(0);
  const { data, loading, error } = useQuery(LIST_LAUNCHES, {
    context: { clientName: 'spaceXApi' },
    variables: { limit: PAGE_SIZE, offset: PAGE_SIZE * page },
  });

  if (loading) return <div>...Loading</div>;
  if (error) return <div>{error.message}</div>;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <h2>Recent lanches</h2>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button disabled={!page} onClick={() => setPage((prev) => prev - 1)}>
          Previous
        </button>
        <span>Page: {page + 1}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </nav>
      <div>
        {data.launchesPast.map((launch: any) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid red',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography>Page: {page + 1}</Typography>
        <Typography>Offset: {PAGE_SIZE * page}</Typography>
        <Pagination count={totalPage} page={page + 1} onChange={handleChange} color="primary" />
      </div>
    </>
  );
};

export default SpaceXDemo;

//https://www.youtube.com/watch?v=_DhYAk4Iy-0
//https://studio.apollographql.com/sandbox/explorer/?
