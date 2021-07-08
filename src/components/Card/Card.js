import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes ={
    cardProps: PropTypes.string,  
  }

  render() {
    return (
      <section>
        <h3 className={styles.component}>{this.props.title}</h3>
      </section>    
      )
  }
}

export default Card;