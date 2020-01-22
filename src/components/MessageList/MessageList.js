import React, { Component } from 'react';

import classes from './MessageList.module.css';

class MessageList extends Component {
  render() {
    return (
      <div
        style={{
          ...this.props.style,
          container: {
            overflowY: 'scroll',
            flex: 1,
          },
        }}
      >
        <ul className={classes.ul}>
          {this.props.messages.map((message, index) => (
            <li key={index} className={classes.li}>
              <div>
                <span className={classes.senderUsername}>{message.senderId}</span>{' '}
              </div>
              <p className={classes.message}>{message.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageList;