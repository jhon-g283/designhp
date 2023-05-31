import styles from '../../styles/cafe/cafe.module.css';

const Header = () => {
  const topPageLink = './cafetoppage';
  return (
    <>
      <div className={styles.headerarea}>
        <h1>
          <a href={topPageLink}>CafeCuCuaCoffe</a>
        </h1>
      </div>
    </>
  );
};

export default Header;
