import html from "html-literal";
//import { Post } from "./posts"; Use with ${Post()}; to display content

export default state => html`
  <div class="main">
    <h1>Janes HQ</h1>
    <div class="post">
      <p>
        G.I. JANE is a women-only weightlifting and healthy lifestyle coaching
        program offering semi-private small group training in consecutive 9-week
        cycles. G.I. Jane's mission is to "Build Women UP!".
      </p>
      <p>
        In the gym, the Janes focus on four main barbell lifts (Squat, Deadlift,
        Bench Press, Overhead Press), along with dumbbell and core exercises in
        each hour-long training session.
      </p>
      <p>
        Outside the gym, the Janes are led to practice proper nutrition and
        mentored in healthy habit skills to improve their ability to build
        muscle, perform well and feel great! We also LOVE to get together for
        social events! Being a part of a community of supportive women is what
        Janes is all about.
      </p>
      <p>
        Small Groups are called "Squads", which meet on a regular schedule each
        week. 2, 3 and 4 days per week program options available. Coach Jena can
        help select the right program for you! All strength and experience
        levels welcome.
      </p>
    </div>
  </div>
`;
