import styles from "./HomePage.module.css";
import { Button } from "../../components/Button/Button";
import { Container } from "../../components/Container/Container";
import old_1 from "../../images/old_1.png";
import old_2 from "../../images/old_2.png";
import old_3 from "../../images/old_3.png";

export function HomePage() {
  return (
    <div>
      <header className={styles.header}>
        <Container className={styles.container}>

          <div className={styles.nav}>
                <div className={styles.brand}>SCHEDIFY</div>

                <nav className={styles.navLinks} aria-label="Primary">
                    <Button variant="secondary">Features</Button>
                    <Button variant="secondary">Employees</Button>
                    <Button variant="secondary">Schedule</Button>
                </nav>

                 <a href="#admin" className={styles.adminLogo}>Admin</a>

          </div>

        </Container>
      </header>

      <main>
        <section className={styles.hero}>

          <Container className={styles.section_1_container}>

            <div className={styles.heroInner}>

              <h1 className={styles.title}>Schedify</h1>

              <p className={styles.subtitle}>
                    You do the work. We do the scheduling.
              </p>

              <div className={styles.actions}>
                    <Button variant="primary">Submit Availability</Button>
                    <Button variant="secondary">Generate Schedule</Button>
              </div>

              <div className={styles.heroTags}>
                    <p>Smart Scheduling</p>
                    <p>Time Tracking</p>
                    <p>Staff Management</p>
              </div>


            </div>


            <div className={styles.heroImage}>  
                <img className={styles.img} src={old_1} alt="" />
                <img className={styles.img} src={old_2} alt="" />
                
                <div className={styles.imgWide}>
                    <img src={old_3} alt="" />
                </div>

            </div>

          </Container>
        </section>

        

        <section id="features" className={styles.features}>
          <Container className={styles.section_2_container}>
            <h2 className={styles.sectionTitle}>Everything you need</h2>
            <p className={styles.subtitle_2}> Powerful tools designed for Sterling House Management</p>
       
            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardTitle}>Easy Scheduling</div>
                <div className={styles.cardText}>
                  Create and manage staff schedules effortlessly with our intuitive interface.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Shift Management</div>
                <div className={styles.cardText}>
                  Track shifts, overtime, and availability with real-time updates.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Staff Coordination</div>
                <div className={styles.cardText}>
                  Ensure optimal staff coverage for all resident care needs.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Fair Shift Distribution</div>
                <div className={styles.cardText}>
                  Ensure fair shifts for employee satisfaction and work-life balance.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Analytics</div>
                <div className={styles.cardText}>
                  Gain insights into staffing patterns and optimize resource allocation.
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.cardTitle}>Compliance</div>
                <div className={styles.cardText}>
                  Stay compliant with labor laws and healthcare regulations.
                </div>
              </div>

                



            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}