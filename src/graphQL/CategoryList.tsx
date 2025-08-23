//import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { Logo } from '../components/Logo/Logo';
import { gql } from '../__generated__';

const CATEGORY_ALL = gql(`
	query CategoryAll ($limit: Int, $skip: Int){
	categoryAll(limit: $limit, skip: $skip) {
		categories {
		id
		name
		}
		totalCount
	}
	}
`);

export const CategoryList = () => {
  const { data, loading, error } = useQuery(CATEGORY_ALL, {
    variables: { limit: 10, skip: 5 },
  });

  if (loading) return <div>...Loading</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div style={{ background: 'lime' }}>
      <h1>Category List</h1>
      <Logo />
      {loading ? <p>Loading...</p> : <div>{data?.categoryAll.map((d) => <p key={d.id}>{d.id}</p>)}</div>}
    </div>
  );
};
