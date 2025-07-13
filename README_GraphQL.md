# Apollo Client

```js
const { data, loading, error } = useQuery(QUERY, { OPTION });
const [mutationFunc, { data, loading, error }] = useMutation(MUTATION, { OPTION });
const [createCategory, { data, loading, error }] = useMutation(MUTATION, { OPTION });
await mutatinoFunc({});
await createCategory({});
```

- useQuery: Run automatically.
- useMutation: A mutationFunc runs by a user action.

```js
const onSubmit = async () => {
  try {
    await createCategory({
      variables: {
        input: {
          name: 'TEST-777',
        },
      },
    });
  } catch (e) {}
};
```

**Options**

- variables:{}
- refetchQueries: [QUERY]
- context: { clientName: 'spaceXApi' },
- fetchPolicy: 'cache-first' | 'network-only'

## References:

- https://www.apollographql.com/docs/react/data/mutations
- [Apollo GraphQL for VS Code](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo)
- [Odyssey Client-side GraphQL with React & Apollo
  ](https://www.apollographql.com/tutorials/client-side-graphql-react/01-feature-overview-and-setup)

- https://www.apollographql.com/tutorials/client-side-graphql-react/01-feature-overview-and-setup
