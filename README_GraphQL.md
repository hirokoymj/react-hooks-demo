# Apollo Client

```txt
const { data, loading, error } = useQuery<CategoryAllData>(CATEGORY_ALL);
const { data, loading, error } = useQuery<CategoryByIdData>(CATEGORY_BY_ID, {
	variables: { id: '5fec597e5e17e200170e0ffe' },
});
const [createCategory, { data, loading, error }] = useMutation<CreateCategoryData>(CREATE_CATEGORY, {
	refetchQueries: [CATEGORY_ALL],
});
```

```js
interface Category {
  id: string;
  name: string;
  abbr: string;
}

type CategoryAllData = {
  categoryAll: Category[];
};
type CategoryByIdData = {
  categoryById: Category;
};
type CreateCategoryData = {
  createCategory: Category;
};
```

```js
export const CATEGORY_BY_ID = gql`
  query Category_By_Id($id: ID!) {
    categoryById(id: $id) {
      id
      name
      abbr
      order
      createdAt
      updatedAt
    }
  }
`;

export const CATEGORY_ALL = gql`
  query CategoryAll {
    categoryAll {
      id
      name
      abbr
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($input: createCategoryInput!) {
    createCategory(input: $input) {
      id
      name
      abbr
      order
      createdAt
      updatedAt
    }
  }
`;
```
