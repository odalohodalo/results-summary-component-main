// const StatsResults = ({ reaction, memory, verbal, visual }) => {
//   return (
//     <div className="Results">
//       <div>
//         <h3>
//           <img src={reaction.icon} alt={`Picture of ${reaction.category}`} />
//           {reaction.category}
//         </h3>
//         <p>
//           <span>{reaction.score} </span> / 100
//         </p>
//       </div>
//       <div>
//         <h3>
//           <img src={memory.icon} alt={`Picture of ${memory.category}`} />
//           {reaction.category}
//         </h3>
//         <p>
//           <span>{memory.score} </span> / 100
//         </p>
//       </div>
//       <div>
//         <h3>
//           <img src={verbal.icon} alt={`Picture of ${verbal.category}`} />
//           {verbal.category}
//         </h3>
//         <p>
//           <span>{verbal.score} </span> / 100
//         </p>
//       </div>
//       <div>
//         <h3>
//           <img src={visual.icon} alt={`Picture of ${visual.category}`} />
//           {reaction.category}
//         </h3>
//         <p>
//           <span>{visual.score} </span> / 100
//         </p>
//       </div>
//     </div>
//   );
// };

const StatsResults = ({ results }) => {
  return (
    <div className="Results">
      {results.map((result, indx) => {
        return (
          <div key={indx}>
            <h3>
              <img src={result.icon} alt={`Picture of ${result.category}`} />
              {result.category}
            </h3>
            <p>
              <span>{result.score} </span> / 100
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsResults;

