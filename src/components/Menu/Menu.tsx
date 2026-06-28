import { FC, useState } from 'react';
import styles from './Menu.module.scss';
import github from '/images/github.png';
import codepen from '/images/codepen.png';
interface MenuItem {
    name: string;
    order: number;
    count?: number;
}
interface MenuProps {
  menuItems: MenuItem[];
  activeId?: string;
}

const Menu: FC<MenuProps> = ({ menuItems, activeId }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <menu className={`${styles.menu} ${menuOpen ? styles.menu_open : ''}`}>
      <header className={styles.menu_header}>
        <span className={styles.brand}>L &nbsp; aders</span>

        <button className={styles.menu_toggle} onClick={() => setMenuOpen(!menuOpen)}></button>
      </header>

      {menuItems.map((item) => (
        <a
          key={item.name}
          href={`#${item.name}`}
          className={`${styles.menu_item} ${activeId === item.name ? styles.active : ''}`}
          aria-current={activeId === item.name ? 'true' : undefined}
        >
          {item.name}
          {typeof item.count === 'number' && (
            <span className={styles.menu_item_count}>{item.count}</span>
          )}
        </a>
      ))}

      <footer className={styles.menu_footer}>
        <nav className={styles.social_links}>
          <a
            target="_blank"
            rel="noreferrer"
            style={{ backgroundImage: `url(${github})` }}
            href="https://github.com/vineethtrv/css-loader"
          ></a>
          <a
            target="_blank"
            rel="noreferrer"
            style={{ backgroundImage: `url(${codepen})` }}
            href="https://codepen.io/vineethtrv"
          ></a>
        </nav>

        <span className={styles.developer}>
          {/* Give me some suggestion to mention developer */}
          Made with&nbsp;<span style={{ color: 'red' }}>❤️</span>&nbsp; by
          <a className={styles.menu_developer} href="https://vineethtrv.github.io/" target="_blank">
            {' '}
            Vineeth TR{' '}
          </a>
        </span>
      </footer>
    </menu>
  );
};

export default Menu;
