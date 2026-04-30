function App() {
  return (
    <main className="page">
      <section className="card">
        <div className="top">
          <h1>ENCRYPTIC.CO.UK</h1>
          <span className="status">Website in progress</span>
        </div>

        <p className="eyebrow">Thanks for checking us out</p>
        <h2>Main website is still being built.</h2>
        <p className="lead">
          Thanks for visiting. The full Longno website is not finished yet,
          but you can check progress on our temporary site.
        </p>

        <div className="actions">
          <a
            href="https://longno.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="primary"
          >
            Open temporary site
          </a>
          <a
            href="https://discord.gg/Encryptic"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
          >
            Join Discord
          </a>
        </div>

        <div className="links">
          <div className="link-card">
            <strong>Temporary site</strong>
            <a href="https://longno.lovable.app">longno.lovable.app</a>
          </div>
          <div className="link-card">
            <strong>Discord</strong>
            <a href="https://discord.gg/Encryptic">discord.gg/Encryptic</a>
          </div>
          <div className="link-card">
            <strong>Main domain</strong>
            <p>Encryptic.co.uk (coming soon)</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
