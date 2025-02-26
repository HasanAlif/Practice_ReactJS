import { useState } from "react";

export default function LikeButton(){
    let [like, setLike] = useState(0);

    let incLike = () => {
        setLike(like + 1);
    };

    return (
        <div>
            <h3>Like = {like}</h3>
            <button onClick={incLike}>Like</button>
        </div>
    );
}