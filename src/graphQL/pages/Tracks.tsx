//import { gql } from '../__generated__/';
import { gql } from '../../__generated__';
import { useQuery } from '@apollo/client';

/** GET_TRACKS query to retrieve all tracks */
const GET_TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`);

const Tracks = () => {
  const { loading, error, data } = useQuery(GET_TRACKS, {
    context: { clientName: 'odeysseyApi' },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data);
  return <h1>TEST</h1>;
};

export default Tracks;
