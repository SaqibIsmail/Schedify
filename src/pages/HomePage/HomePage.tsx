import styles from "./HomePage.module.css";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";

export function HomePage() {
  return (
    <div>
      <header className={styles.header}>
        <Container className={styles.container}>
          <div className={styles.nav}>
            <div className={styles.brand}>Schedule Maker</div>

            <nav className={styles.navLinks} aria-label="Primary">
              <a href="#features">Features</a>
              <a href="#employees">Employees</a>
              <a href="#schedule">Schedule</a>
            </nav>
            
          </div>
        </Container>
      </header>

      <main>
        <section className={styles.hero}>
          <Container className={styles.container}>
            <div className={styles.heroInner}>
              <h1 className={styles.title}>Build fair schedules in minutes.</h1>

              <p className={styles.subtitle}>
                Collect availability, respect full-time rules, and generate a clean
                2-week schedule that distributes hours fairly.
              </p>

              <div className={styles.actions}>
                <Button variant="primary">Get Started</Button>
                <Button variant="secondary">View Employees</Button>
              </div>

              <div className={styles.heroCard}>
                <div className={styles.heroCardTitle}>Shifts</div>
                <div className={styles.heroCardRow}>
                  <span>Morning</span>
                  <span>9:30–1:30 (4h) • Need 6</span>
                </div>
                <div className={styles.heroCardRow}>
                  <span>Evening</span>
                  <span>3:00–7:00 (4h) • Need 7</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="features" className={styles.features}>
          <Container className={styles.container}>
            <h2 className={styles.sectionTitle}>Made for real workflows</h2>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Fast availability</div>
                <div className={styles.cardText}>
                  2-week grid input with quick toggles and bulk edits.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Full-time first</div>
                <div className={styles.cardText}>
                  Schedule full-timers first (exactly 5 days), then fill with part-timers.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Fair hours</div>
                <div className={styles.cardText}>
                  Prioritize staff with the most hours remaining to target.
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}