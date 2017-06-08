import Navbar from './navbar'

export default ({ children }) => (
  <div>
    <header>
      <Navbar />
    </header>
    {children}
    <footer>
      I`m here to stay
    </footer>
  </div>
)