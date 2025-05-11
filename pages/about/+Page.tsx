import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

import { Link } from "../../components/Link";
import { List } from "../../components/List";
import { Title } from "../../components/Title";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto">
      <Title>About Page</Title>
      <p className="text-justify">
        Hi. My name is Andrew Vetovitz. I am a software engineer currently based in Cleveland, Ohio. I mainly have been
        doing frontend work, but I am looking to transition towards backend work. I like to learn about new algorithms
        and build projects that interest me when I find the time. Otherwise, in my free time, I like to disconnect and
        either exercise or take a walk, but I am happy to continue learning math and science.
      </p>

      <div className="flex flex-row">
        <section className="basis-1/3">
          <Title>Things I like...</Title>
          <List>
            <li>Programming</li>
            <li>Food</li>
            <li>Working out</li>
            <li>Learning</li>
            <li>Taking walks</li>
            <li>Catching up with friends</li>
          </List>
        </section>

        <section className="basis-1/3">
          <Title>I&apos;ve worked at...</Title>
          <List>
            <li>Meta (formerly Facebook)</li>
            <li>Goldman Sachs</li>
            <li>Scott&apos;s Miracle-Gro</li>
            <li>The Ohio State University</li>
          </List>
        </section>

        <section className="basis-1/3">
          <Title>I&apos;ve lived in...</Title>
          <List>
            <li>Ohio</li>
            <li>New York</li>
            <li>New Jersey</li>
          </List>
        </section>
      </div>

      <Title>
        Contact <FontAwesomeIcon icon={faEnvelope} size="xl" />
      </Title>
      <p>
        You can reach me by email at <Link href="mailto:andrewvetovitz@gmail.com">AndrewVetovitz@gmail.com</Link>.
      </p>
    </div>
  );
}
