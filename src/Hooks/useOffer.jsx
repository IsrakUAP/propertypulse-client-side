import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useOffer = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://b8a12-server-side-iota.vercel.app/submitOffer')
      .then((response) => response.json())
      .then((data) => {
        setOffers(data); setLoading(false)});
    }, []);
    return [offers, loading]
};

export default useOffer;