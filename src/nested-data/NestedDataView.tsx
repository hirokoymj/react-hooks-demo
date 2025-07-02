import { data } from './data';

export const NestedDataView = () => {
  return (
    <div>
      <h2>Demo</h2>
      {data.map((d) => (
        <>
          <div key={d.id}>{d.name}</div>
          {d.items.map((item) => (
            <p key={item.id}>{item.id}</p>
          ))}
        </>
      ))}
    </div>
  );
};

/*
data.map((d)=>(<div key={d.id}>{d.items.map((item)=>(<p id={item.id}>{item.name}</p>))}</div>))
*/
// Wrong on 06/24 - JSX must have one Parent element.

// export const NestedDataView = () => {
//   return (
//     <div>
//       <h2>Demo</h2>
//       {data.map((category) => (
//         <div key={category.id}>
//           <h2>{category.name}</h2>
//           <ul>
//             {category.items.map((item) => (
//               <li key={item.id}>{item.id}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };
