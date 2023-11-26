import { useEffect, useState } from "react";


const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then((response) => response.json())
        .then((data) => {
            setReviews(data); setLoading(false)
        })
    }, []);

    return[reviews,loading]
};

export default useReviews;