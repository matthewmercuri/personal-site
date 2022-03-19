import NavBar from '../NavBar'

type INProps = {
  children?: JSX.Element
}

const Layout = ({children}: INProps) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}
  
export default Layout
