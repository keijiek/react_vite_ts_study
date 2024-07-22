

function Header() {

  return (
    <header>
      <div className='container mx-auto pt-4 pb-4 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between'>
        <h1 className="text-4xl font-bold">
          <a href="./">keijiek.com</a>
          </h1>
        <nav>
          <ul className="flex flex-row md:flex-row gap-4">
            <li><a href="#">HOME</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
