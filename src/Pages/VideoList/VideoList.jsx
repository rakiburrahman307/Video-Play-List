import { useEffect, useState } from "react";
import Videos from "./Videos";

const VideoList = () => {
    const [AllData, setAllData] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/allVideos')
        .then((res)=>res.json())
        .then((data)=>setAllData(data))
    },[]);
    console.log(AllData);
    return (
        <div>
            <h2 className="text-4xl font-bold text-center py-10">All Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 md:px-10">
               {
                AllData?.map(data => <Videos key={data?.id} data={data}></Videos>)
               } 
            </div>
        </div>
    );
};

export default VideoList;