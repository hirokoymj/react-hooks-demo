# Apollo Client

## Pagination with Apollo client

- https://www.youtube.com/watch?v=_DhYAk4Iy-0
- https://studio.apollographql.com/sandbox/explorer/?
- https://spacex-production.up.railway.app/

```js
//Page 1
query ListLaunches {
  launchesPast(limit: 10, offset: 0) {
    mission_name
  }
}
//Page 2
query ListLaunches {
  launchesPast(limit: 10, offset: 10) {
    mission_name
  }
}
//
const PAGE_SIZE = 10;
const total_items = 187;
const totalPage = Math.ceil(total_items / PAGE_SIZE);

export const SpaceXDemo = () => {
  const [page, setPage] = useState(0); //set "0".
  const { data, loading, error } = useQuery(LIST_LAUNCHES, {
    variables: { limit: 10, offset: PAGE_SIZE * page },
  });
}
```

```js
<Pagination count={totalPage} page={page + 1} onChange={handleChange} color="primary" />
```

## References:

- https://www.apollographql.com/tutorials/client-side-graphql-react/01-feature-overview-and-setup
- https://www.apollographql.com/docs/react/data/mutations
- [Apollo GraphQL for VS Code](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
- [Odyssey Client-side GraphQL with React & Apollo
  ](https://www.apollographql.com/tutorials/client-side-graphql-react/01-feature-overview-and-setup)

- https://www.apollographql.com/tutorials/client-side-graphql-react/01-feature-overview-and-setup
