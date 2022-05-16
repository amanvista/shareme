import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';


const Feed = () => {
    const { categoryId } = useParams();
const ideaName = categoryId || 'new';
const [loading, setLoading] = useState(true);
if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }
  return (
    <div>
        Feeds
    </div>
  )
}

export default Feed