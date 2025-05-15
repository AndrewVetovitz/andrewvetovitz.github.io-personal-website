import { Link } from "../../components/Link";
import { List } from "../../components/List";
import { Title } from "../../components/Title";
import { Li } from "../../components/ListItem";
import { PastDate } from "../../components/PastDate";
import { Text } from "../../components/Text";

import resume from "../../assets/resume/AndrewVetovitzResume.pdf";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto">
      <Text className="font-bold text-xl pt-4">
        <Link download="AndrewVetovitzResume" href={resume}>
          My Resume
        </Link>
      </Text>

      <Title className="text-3xl pt-4">Education</Title>
      <Title>
        B.S. Computer Science & Engineering at <Link href="https://www.osu.edu/">The Ohio State University</Link>
      </Title>
      <Title className="text-[18px]">August 2014 - December 2018</Title>

      <Title className="text-3xl pt-4 pb-2">Languages & Technologies</Title>
      <List>
        <Li>Java</Li>
        <Li>C++</Li>
        <Li>React</Li>
        <Li>Spring</Li>
        <Li>Git</Li>
        <Li>Javascript/Typescript</Li>
        <Li>HTML</Li>
        <Li>CSS</Li>
      </List>

      <Title className="text-3xl pt-4">Experience</Title>
      <Title>
        Software Engineer at <Link href="https://www.meta.com/">Meta</Link> (formerly Facebook)
      </Title>
      <Title className="text-[18px] py-1">
        August 2021 - March 2024 <PastDate>2 year, 7 months</PastDate>
      </Title>
      <List>
        <Li>Reduced expense by $300 million per year by upgrading GDPR compliance</Li>
        <Li>Lead team of 5 engineers to replace 200 files of legacy technical debt and streamline development</Li>
        <Li>Created services to streamline Ads Platform error feedback to unblock advertisers</Li>
        <Li>Mentored new hires and interns, integrating them into the Ads Platform ecosystem</Li>
      </List>

      <Title>
        Software Engineer at <Link href="https://www.goldmansachs.com/">Goldman Sachs</Link>
      </Title>
      <Title className="text-[18px] py-1">
        February 2019 - July 2021 <PastDate>2 year, 5 months</PastDate>
      </Title>
      <List>
        <Li>Worked with team to build a multimilLion-dollar South African business platform</Li>
        <Li>Improved existing record classification to save company $50k per year and 62 work hours per year</Li>
        <Li>Mentored new hires and interns, integrating them into the technical and business ecosystem</Li>
        <Li>Reduced product build times from 40+ minutes to 15 minutes through optimization and bottleneck analysis</Li>
        <Li>Integrated containerized deployments to reduce deployment time from 2 hours to 15 minutes</Li>
      </List>

      <Title>
        Software Engineer Intern at <Link href="https://www.goldmansachs.com/">Goldman Sachs</Link>
      </Title>
      <Title className="text-[18px] py-1">
        May 2018 - August 2018 <PastDate>4 months</PastDate>
      </Title>
      <List>
        <Li>Created pricing monitoring tool for New York, London and Hong Kong exchanges</Li>
        <Li>Monitoring tool produced a reduced afterhours error management from 2 hours a day down to 10 minutes</Li>
        <Li>Responsible for frontend project design and management</Li>
        <Li>Developed parser to generaLize file system paths and query parameters</Li>
      </List>

      <Title>
        Software Engineer Intern at <Link href="https://scottsmiraclegro.com/">Scott&apos;s Miracle-Gro</Link>
      </Title>
      <Title className="text-[18px] py-1">
        May 2017 - August 2017 <PastDate>4 months</PastDate>
      </Title>
      <List>
        <Li>Improved manufacturing accountabiLity by digitizing product quaLity collection</Li>
        <Li>Reduced quaLity inspection times by minimum 1 hour at each production plant, total of 20 plants</Li>
        <Li>Implemented Google sign-in authorization for both shipping yard and quaLity control projects</Li>
        <Li>Developed backend for shipping yard control process to record trailer shipments</Li>
      </List>

      <Title>
        Developer contractor at{" "}
        <Link href="https://www.Linkedin.com/search/results/all/?keywords=IFAA%20(Idea%20for%20an%20App)&origin=GLOBAL_SEARCH_HEADER&sid=1I%3A">
          IFAA
        </Link>
      </Title>
      <Title className="text-[18px] py-1">
        May 2017 - May 2018 <PastDate>1 year</PastDate>
      </Title>
      <List>
        <Li>Created parking appLication website to reserve and pay for parking spaces</Li>
        <Li>Secured user payment system through JSON Web Tokens and Stripes payment framework</Li>
        <Li>Created Admin Portal to efficiently adjust user permissions, price, and parking locations</Li>
      </List>

      <Title>
        Computer Science Teaching Assistant at <Link href="https://www.osu.edu/">The Ohio State University</Link>
      </Title>
      <Title className="text-[18px] py-1">
        January 2017 - May 2018 <PastDate>1 year, 4 months</PastDate>
      </Title>
      <List>
        <Li>Held weekly office hours and Monitored discussion boards for a total of 110 students</Li>
        <Li>
          Aided students in Software development (Java), Data Structures and Algorithms (C++), and Computer Systems (C)
        </Li>
        <Li>Automated project grading by writing shell scripts to remove human error and total grading time</Li>
      </List>
    </div>
  );
}
