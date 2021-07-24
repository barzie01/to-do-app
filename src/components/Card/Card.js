import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes ={
    cardProps: PropTypes.string,
    title: PropTypes.string,  
  }

  render() {
    const {title} = this.props;
    return (
      <section>
        <h3 className={styles.component}>{title}</h3>
      </section>    
    );
  }
}

export default Card;