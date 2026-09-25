import {site} from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="brand">MINAKARI</div>
          <p>Contemporary Persian enamel for corporate identity.</p>
        </div>
        <div>
          <p>{site.email}</p>
          <p>{site.phone}</p>
        </div>
      </div>
    </footer>
  );
}
