import Movies from "./Movies";

const MovieBox = ({data2, deleteProp} : any) => {
    return <div>
        <Movies data3={data2} deleteProp={deleteProp}/>
    </div>;
};
 
export default MovieBox;
