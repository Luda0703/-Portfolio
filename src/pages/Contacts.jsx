const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Tatarbunary, Ukraine</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram</h2>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://t.me/LudmilaNikitenko"
              >
                +38 (098) 263-40-07
              </a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              >
                nikitenko.lyudmila.1989@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
