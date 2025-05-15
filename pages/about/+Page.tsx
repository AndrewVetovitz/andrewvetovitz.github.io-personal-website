import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "../../components/Link";
import { List } from "../../components/List";
import { Text } from "../../components/Text";
import { Li } from "../../components/ListItem";
import { Title } from "../../components/Title";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto">
      <Title className="text-3xl pt-4">About</Title>
      <Text className="text-[18px] text-justify">
        Hi. My name is Andrew Vetovitz. I am a software engineer currently based in Cleveland, Ohio. I mainly have been
        doing frontend work, but I am looking to transition towards backend work. I like to learn about new algorithms
        and build projects that interest me when I find the time. Otherwise, in my free time, I like to disconnect and
        either exercise or take a walk, but I am happy to continue learning math and science.
      </Text>

      <div className="flex lg:flex-row max-lg:flex-col">
        <div className="lg:basis-1/3">
          <Title className="text-2xl pt-4 pb-2">Things I like...</Title>
          <List>
            <Li>Programming</Li>
            <Li>Food</Li>
            <Li>Working out</Li>
            <Li>Learning</Li>
            <Li>Taking walks</Li>
            <Li>Catching up with friends</Li>
          </List>
        </div>

        <div className="lg:basis-1/3">
          <Title className="text-2xl pt-4 pb-2">I&apos;ve worked at...</Title>
          <List>
            <Li>Meta (formerly Facebook)</Li>
            <Li>Goldman Sachs</Li>
            <Li>Scott&apos;s Miracle-Gro</Li>
            <Li>The Ohio State University</Li>
          </List>
        </div>

        <div className="lg:basis-1/3">
          <Title className="text-2xl pt-4 pb-2">I&apos;ve lived in...</Title>
          <List>
            <Li>Ohio</Li>
            <Li>New York</Li>
            <Li>New Jersey</Li>
          </List>
        </div>
      </div>

      <Title>
        Contact <FontAwesomeIcon icon={faEnvelope} size="xl" />
      </Title>
      <Text className="text-[18px]">
        You can reach me by email at <Link href="mailto:andrewvetovitz@gmail.com">AndrewVetovitz@gmail.com</Link>.
      </Text>
    </div>
  );
}
