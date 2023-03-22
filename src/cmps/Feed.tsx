import React, { useEffect, useRef, useState } from 'react';
import { fetchFeed } from '../services/api-service';
import { IFeedItem } from '../utils/interfaces/FeedItem';
import FeedItem from './FeedItem/FeedItem';
import ObservedItem from './FeedItem/ObservedItem';
import useApiCall from '../hooks/useApiCall';
import Spinner from './Spinner/Spinner';

function Feed() {
  const [feedItemsToShow, setFeedItemsToShow] = useState<number>(6)
  const [ feedItems, loading, error ] = useApiCall<IFeedItem[]>(fetchFeed);

  const onFeedItemsToShow = () => setFeedItemsToShow((prevFeedItems) => prevFeedItems + 6)
  
  if (loading) return <Spinner/>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {feedItems?.slice(0, feedItemsToShow).map((feedItem, idx) => {
        if (feedItemsToShow === idx + 1) return <ObservedItem isLast onFeedItemsToShow={onFeedItemsToShow} key={feedItem.id}><FeedItem feedItem={feedItem} /></ObservedItem>
        return <ObservedItem  key={feedItem.id}><FeedItem feedItem={feedItem} /></ObservedItem>
      }
      )}

    </div>
  );
}

export default Feed;