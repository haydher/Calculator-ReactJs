const ButtonComponent = ({ className, symbol, onClick }) => {
 return (
  <button className={className} onClick={() => onClick(symbol)}>
   {symbol}
  </button>
 );
};

export default ButtonComponent;
