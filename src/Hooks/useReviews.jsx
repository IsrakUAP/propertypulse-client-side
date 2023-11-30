import { useEffect, useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://b8a12-server-side-iota.vercel.app/review')
        .then((response) => response.json())
        .then((data) => {
            setReviews(data); setLoading(false)
        })
    }, []);

    return[reviews,loading]
};

export default useReviews;