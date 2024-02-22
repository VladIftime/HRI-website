<script>
  import { base } from '$app/paths'

  // Detailed course information
  let course = {
    title: 'Human-Robot Interaction Social Robots',
    faculty: 'Science and Engineering',
    year: '2023-2024',
    code: 'WMAI027-05',
    levels: 'Master',
    credits: 5,
    period: 'Semester 2a (2024-02-05 - 2024-04-14)',
    language: 'English',
    coordinator: 'P.A. Vogt PhD',
    lecturer: 'P.A. Vogt PhD',
    literature: [
      {
        title: 'Human Robot Interaction (freely available online)',
        author:
          'Christoph Bartneck, Tony Belpaeme, Friederike Eyssel, Takayuki Kanda, Merel Keijsers, and Selma Sabanovic',
        isbn: '9781108735407',
        type: '',
        price: '',
      },
    ],
    remarks:
      'This course unit has a capacity limit. Intended limit of 60 participants.',
    prerequisites:
      'Recommended: Cognitive Robotics. Prior knowledge of Python is useful, but not required.',
    learningOutcomes: [
      'Explain the core principles underlying human-robot interaction for social robots.',
      'Combine theories about human communication, cognition, and behaviour to develop natural interactions between social robots and humans.',
      'Apply methods of user-centred design and AI to develop HRI for social robots.',
      'Design, carry out, and analyse experiments in HRI.',
    ],
    description:
      'Social robots are entering our society at an increasing speed, providing support in education, healthcare, hospitality, and other domains. This course focuses on designing AI for robots that can communicate socially with humans in an effective and efficient manner, including verbal and non-verbal gestural communication.',
    teachingMethod:
      'Lecture, Practical. Students work individually and in groups on a research project.',
    assessment:
      'Report, Presentation, Assignment. Final grade based on assignments (30%), research report (50%), and video presentation (20%) with a minimum of 5.5.',
  }
  let professor = {
    name: 'Dr. P.A. Vogt',
    title: 'Associate Professor',
    department: 'Artificial Intelligence',
    researchInterests: [
      'Human-Robot Interaction',
      'Social Robotics',
      'Cognitive Systems',
    ],
    email: 'p.a.vogt@rug.nl',
    phone: '+31 50 123 4567',
    office: 'BB 410',
    imageUrl: 'Pics/2018-tiu-340-vogt.webp', // Replace with actual image path
  }
</script>

<!-- Hero Section -->
<div class="hero bg-base-300">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{course.title}</h1>
      <p class="py-6">{course.description}</p>
    </div>
  </div>
</div>
<!-- Course Details -->

<section id="course-details" class="container mx-auto p-8">
  <div
    class=" w-full py-4 grid md:grid-cols-3 gap-2 sm:grid-cols-1
    justify-items-center">
    <!-- Course Information Card -->
    <div class="flex-grow card bg-base ">
      <h3 class="text-2xl font-bold text-center m-3">Learning outcomes</h3>

      <div class="grid grid-cols-1 gap-1 ">
        {#each course.learningOutcomes as outcome}
          <div class="card bg-neutral text-neutral-content shadow-xl m-2 ">
            <div class="card-body ">
              <p class="">{outcome}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="divider divider-horizontal md:visible sm:invisible " />

    <!-- Coordinator Information Card -->
    <div class="flex-grow card bg-base ">
      <h3 class="text-2xl font-bold text-center m-3">Coordinator</h3>

      <figure>
        <div class="avatar">
          <div class="w-40 rounded-full">
            <img
              src={professor.imageUrl}
              alt="Profile image of {professor.name}" />
          </div>
        </div>

      </figure>
      <div class="card-body">
        <h2 class="card-title">{professor.name}</h2>
        <p>{professor.title}, {professor.department}</p>
        <div>
          <strong>Research Interests:</strong>
          <ul>
            {#each professor.researchInterests as interest}
              <li>{interest}</li>
            {/each}
          </ul>
        </div>
        <div>
          <strong>Contact:</strong>
          <p>Email: {professor.email}</p>
          <p>Phone: {professor.phone}</p>
          <p>Office: {professor.office}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Course Information Section -->
<section class="bg-base-300 p-8">
  <!-- Course Information Section -->
  <section class="bg-base-300 p-8">
    <div class="card">
      <h2 class="text-3xl font-bold text-center">Course Information</h2>
    </div>
  </section>
  <div class="container mx-auto grid md:grid-cols-2 gap-2 sm:grid-cols-1 ">

    <!-- Overall Structure of the Course -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-bold">Overall Structure of the Course</h2>
        <p class="prose">
          The course Human-Robot Interaction for Social Robots consists of a
          total of eight lectures. Next to this, there are practical sessions of
          2 hours per week in which you can work on the assignments/project
          under the supervision of the lecturer and with TA support. In
          addition, there is time reserved for self-study during which you can
          work on the assignments/project with TA support.
        </p>
      </div>
    </div>

    <!-- Lectures and Practical Sessions -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">

        <h2 class="text-2xl font-bold">Lectures and Practical Sessions</h2>
        <p class="prose">
          The lectures will be held in person when possible. The slides will be
          made available afterwards, but there will be no recordings. All
          lectures have some reading materials as indicated; you are expected to
          have read that work before the lecture (as the lecture itself will
          build on that work). The practicals will be held in person as well.
          Here assignments and project will be explained by the lecturer who
          will be further available most of the time for discussions.
        </p>
      </div>
    </div>

    <!-- Literature Overview -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-bold">Literature Overview</h2>
        <p class="prose">
          A list of scientific articles to be read prior to the lectures will be
          given for each week. In addition, we will make use of chapters 4, 7, 8
          and 10 from the book Human Robot Interaction by Christoph Bartneck,
          Tony Belpaeme, Friederike Eyssel, Takayuki Kanda, Merel Keijsers, and
          Selma
          <a href="http://www.cambridge.org/9781108735407" target="_blank">
            Sabanovic. ISBN: 9781108735407
          </a>
          <br />
          Individual chapters are available online at
          <a href="https://www.human-robot-interaction.org" target="_blank">
            https://www.human-robot-interaction.org
          </a>
        </p>
        <div class="card-actions justify-center">
          <a href="{base}/literature" class="btn bg-accent text-accent-content">
            Literature
          </a>
        </div>
      </div>
    </div>

    <!-- Assignments Section -->
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="text-2xl font-bold">Assignments</h2>
        <p class="prose">
          The course begins with two assignments, each worth up to 15 points,
          followed by a major group research and design project on creating a
          social robot for elderly people, including individual tasks. The
          project includes a written report and a video presentation/demo, worth
          up to 50 and 20 points, respectively. Grades are based on the total
          points divided by 10. A minimum of 5.0 per component (7 points for
          assignments, 25 for the report, 10 for the presentation) and an
          overall 5.5 are required to pass. There are opportunities for
          resubmission.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Schedule Section -->
<section id="contact" class="bg-base p-8 text-center">
  <h2 class="text-3xl font-bold">Schedule</h2>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Week</th>
          <th>Date</th>
          <th>Lecture</th>
          <th>Date</th>
          <th>Practical</th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>6 Feb</td>
          <td>Introduction to social robots</td>
          <td>7 Feb</td>
          <td>Intro robots</td>
        </tr>
        <!-- row 2 -->
        <tr class="hover">
          <th>2</th>
          <td>13 Feb</td>
          <td>Verbal and non-verbal interaction</td>
          <td>14 Feb</td>
          <td>Verbal interaction</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>20 Feb</td>
          <td>Design of HRI, research methods</td>
          <td>21 Feb</td>
          <td>Non-verbal interaction</td>
        </tr>
        <!-- row 4 -->
        <tr class="hover">
          <th>4</th>
          <td>27 Feb</td>
          <td>Robot companions in elderly care; Long-term interaction</td>
          <td>28 Feb</td>
          <td>Project start</td>
        </tr>
        <!-- row 5 -->
        <tr>
          <th>5</th>
          <td>5 Mar</td>
          <td>Social robots in elderly care (guest lecture Sanja Balalic)</td>
          <td>6 Mar</td>
          <td>Project work</td>
        </tr>
        <!-- row 6 -->
        <tr class="hover">
          <th>6</th>
          <td>12 Mar</td>
          <td>Common ground</td>
          <td>13 Mar</td>
          <td>Project work</td>
        </tr>
        <!-- row 7 -->
        <tr>
          <th>7</th>
          <td>19 Mar</td>
          <td>Personalisation (guest lecture Fokie Cnossen) and empathy</td>
          <td>20 Mar</td>
          <td>Project work</td>
        </tr>
        <!-- row 8 -->
        <tr class="hover">
          <th>8</th>
          <td>26 Mar</td>
          <td>Ethics and Robots in society</td>
          <td>27 Mar</td>
          <td>Presentations</td>
        </tr>
      </tbody>
    </table>
  </div>

</section>
