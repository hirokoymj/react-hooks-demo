import { data } from './data';

export const NestedDataView = () => {
  return (
    <div>
      <h2>Demo</h2>
      {data.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item) => (
              <li key={item.id}>{item.id}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Wrong on 06/24 - JSX must have one Parent element.
//   return (
//     <div>
//       <h2>Demo</h2>
//       {data.map((category) => (
// 		  <h2>{category.name}</h2> // ERROR - TWO parent div
// 		  <div>
// 			{category.items.map((item)=>(
// 			  <p>{item.id}</p>
// 		  ))}
// 		  </div>
//       ))}
//     </div>
//   );
