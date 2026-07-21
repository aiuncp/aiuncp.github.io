import Image from "next/image";

const records = [
  {
    title: "HackUNCP",
    description:
      "AI@UNCP's flagship AI hackathon, with editions in 2025 and 2026.",
    href: "https://hackuncp.github.io/",
    className: "record record-gold",
  },
  {
    title: "AI@UNCP at UNC Pembroke",
    description:
      "A campus community for learning, project building, and exploration in artificial intelligence.",
    href: null,
    className: "record record-neutral",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand">
          <Image
            className="brand-logo"
            src="/aiuncp-logo.png"
            alt=""
            width={1080}
            height={1080}
            priority
          />
          <span>AI@UNCP</span>
        </div>
      </header>

      <main className="main-content">
        <section className="introduction" aria-labelledby="page-title">
          <h1 id="page-title">AI@UNCP</h1>
          <p>
            A student-led organization at the University of North Carolina at
            Pembroke centered on hands-on learning, practical projects, and
            exploration in artificial intelligence.
          </p>
        </section>

        <section className="records" aria-label="AI@UNCP records">
          {records.map((record) => {
            const content = (
              <>
              <span className="record-copy">
                <strong>{record.title}</strong>
                <span>{record.description}</span>
              </span>
                {record.href ? (
                  <span className="record-arrow" aria-hidden="true">
                    ↗
                  </span>
                ) : null}
              </>
            );

            return record.href ? (
              <a
                className={`${record.className} record-link`}
                href={record.href}
                key={record.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <article className={record.className} key={record.title}>
                {content}
              </article>
            );
          })}
        </section>
      </main>

      <footer className="site-footer">© AI@UNCP</footer>
    </div>
  );
}
