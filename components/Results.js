import Thumbnail from "./Thumbnail";
import FlipMove from 'react-flip-move'

const Results = ({results}) => {
  return (
    <FlipMove div className="px-5 py-10
    sm:grid
    md:grid-cols-2
    xl:grid-cols-3
    3xl:flex flex-wrap items-center">
      {results.map(result => (
        <Thumbnail key={result.id} result={result}/>
      ) )}
    </FlipMove>
  );
}

export default Results;