import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    columnProps: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.string,
    title: PropTypes.string,
  }

  render() {
    const {title, icon, cards} = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/* <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} /> */}
      </section>
    );
  }
}

export default Column;