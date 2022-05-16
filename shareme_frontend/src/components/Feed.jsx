import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';
import { feedQuery, searchQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';


const Feed = () => {
    const { categoryId } = useParams();
const ideaName = categoryId || 'new';
const [loading, setLoading] = useState(true);
const [pins, setPins] = useState();


useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);
  
if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }
  return (
    <div>
        {pins && (
        <MasonryLayout pins={pins} />
      )}
    </div>
  )
}

export default Feed