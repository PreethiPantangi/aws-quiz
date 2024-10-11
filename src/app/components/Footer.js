const Footer = () => {

  const currentYear = (new Date()).getFullYear();

  return (
    <footer className="text-center p-4 mt-4  mb-4">
      Developed by <a className="underline text-blue-500" href="https://www.linkedin.com/in/preethipantangi/" target="_blank">Sai Preethi Pantangi</a> using Next JS © {currentYear}
    </footer>
  );
}

export default Footer;
