import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useOffer = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/submitOffer')
      .then((response) => response.json())
      .then((data) => {
        setOffers(data); setLoading(false)});
    }, []);
    return [offers, loading]
};

export default useOffer;