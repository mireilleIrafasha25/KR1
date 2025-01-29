
import "../styles/services.css"
const Service=()=>
{
    return (
        <section id="services">
    <div class="container">
      <h2 class="section-title">My <span>Service</span></h2>
      <p class="section-description">
        Offering services that combine technical expertise and creativity to bring your vision to life.
      </p>
      <div class="service-cards">
        <div class="card">
          <div class="icon">💻</div>
          <h3>Backend Development</h3>
          <p>Crafting reliable and scalable server-side solutions, APIs, and database systems to power your applications seamlessly.</p>
        </div>
        <div class="card">
          <div class="icon">🍴</div>
          <h3>Catering Services</h3>
          <p>Delivering high-quality catering solutions for events of all sizes, featuring delicious meals and impeccable service.</p>
        </div>
        <div class="card">
          <div class="icon">🌐</div>
          <h3>Web Development</h3>
          <p>Building modern and user-friendly websites tailored to your specific needs, ensuring optimal performance and design.</p>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Service;