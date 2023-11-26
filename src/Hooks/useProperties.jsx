import { useEffect, useState } from "react";


const useProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/property')
      .then((response) => response.json())
      .then((data) => {
        setProperties(data); setLoading(false)});
    }, []);
    return [properties, loading]
};

export default useProperties;