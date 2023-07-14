interface NavbarProps {
  title: string;
  items?: React.ReactNode;
  search?: React.ReactNode;
  login?: React.ReactNode;
}

function Navbar({ title, items, search, login }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        {items}
        {search}
        {login}
      </div>
    </nav>
  );
}

export default Navbar;
