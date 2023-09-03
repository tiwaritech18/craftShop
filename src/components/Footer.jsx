const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  const yourName = 'Rohit.dev';
  return (
    <div className="footer">
      <div className="heading">
      <div className="brand">
        <h1>stile <span>.</span></h1>
      </div>
      <p>Buy something</p>
      </div>
      <div className="copyright" style={{textAlign:"center"}}>
      <h4> &copy; {currentYear}  {yourName}</h4> 
      </div>

    </div>
  )
}

export default Footer
