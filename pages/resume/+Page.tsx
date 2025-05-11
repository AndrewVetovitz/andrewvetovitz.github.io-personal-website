import { Link } from "../../components/Link.js";
import { List } from "../../components/List.js";
import { Title } from "../../components/Title.js";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto">
      <Title className="text-3xl pt-4">Education</Title>
      <Title>
        B.S. Computer Science & Engineering at <Link href="https://www.osu.edu/">The Ohio State University</Link>
      </Title>
      <h2>August 2014 - December 2018</h2>

      <Title className="text-3xl pt-4">Languages & Technologies</Title>
      <List>
        <li>Java</li>
        <li>C++</li>
        <li>React</li>
        <li>Spring</li>
        <li>Git</li>
        <li>Javascript/Typescript</li>
        <li>HTML</li>
        <li>CSS</li>
      </List>

      <Title className="text-3xl pt-4">Experience</Title>
      <Title>
        Software Engineer at <Link href="https://www.meta.com/">Meta</Link> (formerly Facebook)
      </Title>
      <h2>August 2021 - March 2024 (2 year, 7 months)</h2>
      <List>
        <li>Test</li>
      </List>

      <Title>
        Software Engineer at <Link href="https://www.goldmansachs.com/">Goldman Sachs</Link>
      </Title>
      <h2>February 2019 - July 2021 (2 year, 5 months)</h2>
      <List>
        <li>Worked with team to build a multimillion-dollar South African business platform</li>
        <li>Improved existing record classification to save company $50k per year and 62 work hours per year</li>
        <li>Mentored new hires and interns, integrating them into the technical and business ecosystem</li>
        <li>Reduced product build times from 40+ minutes to 15 minutes through optimization and bottleneck analysis</li>
        <li>Worked to integrate containerized deployments and reduce deployment time from 2 hours to 15 minutes </li>
      </List>

      <Title>
        Software Engineer Intern at <Link href="https://www.goldmansachs.com/">Goldman Sachs</Link>
      </Title>
      <h2>May 2018 - August 2018 (4 months)</h2>
      <List>
        <li>Created pricing monitoring tool for New York, London and Hong Kong exchanges</li>
        <li>Monitoring tool produced a reduced afterhours error management from 2 hours a day down to 10 minutes</li>
        <li>Responsible for frontend project design and management</li>
        <li>Developed parser to generalize file system paths and query parameters</li>
      </List>

      <Title>
        Software Engineer Intern at <Link href="https://scottsmiraclegro.com/">Scott&apos;s Miracle-Gro</Link>
      </Title>
      <h2>May 2017 - August 2017 (4 months)</h2>
      <List>
        <li>Improved manufacturing accountability by digitizing product quality collection</li>
        <li>Reduced quality inspection times by minimum 1 hour at each production plant, total of 20 plants</li>
        <li>Implemented Google sign-in authorization for both shipping yard and quality control projects</li>
        <li>Developed backend for shipping yard control process to record trailer shipments</li>
      </List>

      <Title>
        Developer contractor at{" "}
        <Link href="https://www.linkedin.com/search/results/all/?keywords=IFAA%20(Idea%20for%20an%20App)&origin=GLOBAL_SEARCH_HEADER&sid=1I%3A">
          IFAA
        </Link>
      </Title>
      <h2>May 2017 - May 2018 (1 year)</h2>
      <List>
        <li>Created parking application website to reserve and pay for parking spaces</li>
        <li>Secured user payment system through JSON Web Tokens and Stripes payment framework</li>
        <li>Created Admin Portal to efficiently adjust user permissions, price, and parking locations</li>
      </List>

      <Title>
        Computer Science Teaching Assistant at <Link href="https://www.osu.edu/">The Ohio State University</Link>
      </Title>
      <h2>January 2017 - May 2018 (1 year, 4 months)</h2>
      <List>
        <li>Held weekly office hours and Monitored discussion boards for a total of 110 students</li>
        <li>
          Aided students in Software development (Java), Data Structures and Algorithms (C++), and Computer Systems (C)
        </li>
        <li>Automated project grading by writing shell scripts to remove human error and total grading time</li>
      </List>
    </div>
  );
}
