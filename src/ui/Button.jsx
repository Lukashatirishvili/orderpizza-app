import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base = `inline-block text-sm rounded-full bg-yellow-400  font-semibold
  uppercase tracking-wide text-stone-800 transition-colorsduration-300
   hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-nonefocus:ring
    focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed`;

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-sm',
    secondary: ` inline-block rounded-full bg-white-400 border-2  font-semibold
    uppercase tracking-wide text-stone-800 transition-colorsduration-300
     hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-nonefocus:ring
      focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed
       px-4 py-2.5 md:px-6 md:py-3.5`,
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
