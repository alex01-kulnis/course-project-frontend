import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { EventItem } from './EventItem';
import { observer } from 'mobx-react-lite';

const EventList = observer(({ posts }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Events не найдены!</h1>;
  }

  return (
    <div>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id_event} timeout={500} classNames="post">
            <EventItem post={post} key={post.id_event} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
});

export default EventList;
