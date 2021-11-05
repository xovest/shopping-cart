import './Nav.css'; //context next

const Nav = () => {
  return (
    <nav>
      <div className="nav__left">Store</div>
      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
