import PropTypes from 'prop-types';
import { Component } from 'react';
import Product from '../product';

import styles from './menu.module.css';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
