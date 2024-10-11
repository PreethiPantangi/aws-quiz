const Loader = ({ theme }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${theme === 'dark' ? 'bg-black bg-opacity-70' : 'bg-white bg-opacity-70'}`}>
      <div className={`loader text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        Loading...
      </div>
    </div>
  );
}

export default Loader;
