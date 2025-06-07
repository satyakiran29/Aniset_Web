import './css/CommunitySection.css';
import './css/testimonials.css';

const TestimonyCard = ({ title, description, tags, image }) => (
  <div className="card testimony">
    <img src={image} alt={title} className="card-image" />
    <h2>{title}</h2>
    <p>{description}</p>
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const CommunitySection = () => {
  const testimonies = [
    {
      title: "선배야쿠자",
      description:
        "This widget is best in Play Store and it's a game-changer! It's sleek, customizable, and makes app discovery and management a breeze. The developer support for this widget is top-notch. Any questions or issues I had were quickly resolved, and he is very responsive and helpful. It's clear that he is dedicated to providing a great user experience. Great job!",
      tags: ["User Feedback", "5 Star", "Aniset User"],
      image: "https://play-lh.googleusercontent.com/a-/ALV-UjWBZULZPa2XhPg5AoC28foZVYMFp3etyrbSyXyYM-uVwjJJtude=s32-rw",
    },
    {
      title: "Gaurav Kumar",
      description:
        "Using it since one year and really like it's widgets. And developer thank you for your efforts.",
      tags: ["User Feedback", "5 Star", "Aniset User"],
      image: "https://play-lh.googleusercontent.com/a-/ALV-UjVsxs5270RailQPpjfZGkr57R_3HBL4ywgw0JT5Dd_hHyq2yuvd=s32-rw",
    },
   
    {
      title: "Ahmed Alkhatib",
      description:
        "Recommend to anyone. Great set of widgets with totally original style and design. Just top notch developer. I hope this pack keeps on growing. Would buy again, nice job, man.",
      tags: [
        "User Feedback",
        "5 Star",
        "Aniset User",
      ],
      image: "https://ui-avatars.com/api/?name=Ahmed+Alkhatib&background=random",
    },
    {
      title: "Fatema",
      description:
        "I'm in Love with this Kwgt & Klwp 🥹🩷 thank you so much",
      tags: ["User Feedback", "5 Star", "Aniset User"],
      image: "https://ui-avatars.com/api/?name=Fatema&background=random",
    },
    {
      title: "Amartya Anand",
      description:
        "Awesome widgets especially the anya one looks cool",
      tags: ["User Feedback", "Aniset User", "5 Star"],
      image: "https://ui-avatars.com/api/?name=Amartya+Anand&background=random",
    },

    {
      title: "Nate Westby",
      description:
        "Great widget and wall set. Only found 1 locked widget (I hate those). Gonna keep.",
      tags: [
        "User Feedback",
        "5 Star",
        "Aniset User"
      ],
      image: "https://ui-avatars.com/api/?name=Nate+Westby&background=random",
    },
    {
      title: "A Koushik",
      description:
        "Thanks You for making anime kwgt ❤️❤️❤️",
      tags: [
        "User Feedback",
        "5 Star",
        "Aniset User"
      ],
      image: "https://ui-avatars.com/api/?name=A+Koushik&background=random",
    },
    {
      title: "Abul Haritz",
      description: "Good app. Nice dev.",
      tags: [
        "User Feedback",
        "Aniset User",
        "5 Star"
      ],
      image: "https://ui-avatars.com/api/?name=Abul+Haritz&background=random",
    },
  ];

  return (
    <>
        <section id="testimonials" >
      <center>
        <h1>Testimonies</h1>
        <p>Here's what people are saying about Aniset App.</p>
      </center>
      <div className="container">
        {testimonies.map((testimony, index) => (
          <TestimonyCard key={index} {...testimony} />
        ))}
      </div>
</section>

      <section id="community">
        <div className="community-section">
          <div className="community-content">
            <h2>Join Our Community and Spread Love</h2>
            <p>You're always welcome to our community</p>
            <div className="community-buttons">
              <button className="btn-green">Join Now</button>
              <button className="btn-blue">Download</button>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default CommunitySection;
