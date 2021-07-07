import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>Interesting things I want to check out!</p>
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imgUrl={this.props.url}>
        </Hero>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column colTitle={'Animals'} />
          <Column colTitle={'Plants'} />
          <Column colTitle={'Minerals'} />
        </div>
      </section>
    )
  }
}

export default List;