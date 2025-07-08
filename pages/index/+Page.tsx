import { Link } from "../../components/Link";
import { Title } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";
import { Text } from "../../components/Text";
import { Li } from "../../components/ListItem";
import { PastDate } from "../../components/PastDate";
import { LazyLoadImage } from "../../components/Image";
import { SizeAwareDiv } from "../../components/SizeAwareDiv";

function Break() {
  return <hr className="border-[#e8e7e7] my-5" />;
}

export default function Page() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <Title className="text-3xl pt-4">Projects</Title>
        <Text className="text-xl pt-2">A highlight of some of my personal projects</Text>

        <div className="pb-4">
          <SubTitle className="text-xl pt-4">Table of contents</SubTitle>
          <ul>
            <Li>
              <Link href="#quad-tree">Quad Tree Imaging</Link>
            </Li>
            <Li>
              <Link href="#halite-3">Halite III</Link>
            </Li>
            <Li>
              <Link href="#quad-tree-depreciated">Quad Tree Imaging (Depreciated)</Link>
            </Li>
          </ul>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects">
        {/* Quad Tree */}
        <Break />
        <div className="max-w-5xl mx-auto pb-4" id="quad-tree">
          <SubTitle>
            Quad Tree Imaging (V2) <PastDate>May 2025</PastDate>
          </SubTitle>
          <Text className="text-2xl">Divide Images to create artwork</Text>
          <>
            <Text className="py-2 text-[18px]">
              <Link href="https://en.wikipedia.org/wiki/Quadtree">Quad Tree&apos;s</Link> are a tree data structure with
              4 child nodes per parent; repeated n times. Generally this is used as a partition on two-dimensional
              space.
            </Text>
            <Text className="py-2 text-[18px]">
              When I first started Computer Science I wanted a project to actually build some. I came across{" "}
              <Link href="https://www.michaelfogleman.com/projects/quads/">Michael Fogleman&apos;s</Link> implementation
              and thought it was simple enough and interesting enough to implement. It took me a few months, but the
              first version was done in Java. Years later I revisited this and implemented a web based version with WASM
              (because I needed an excuse to learn WASM).
            </Text>
            <Text className="py-2 text-[18px]">
              You can check out the project in the below <Link href="/static/quad-tree">Link</Link>. It has more
              features and customization than Michael&apos;s version.
            </Text>
          </>
          <div className="text-lg pb-[10px]">
            Links: <Link href="https://github.com/AndrewVetovitz/Quad-Tree-Imaging-2">Github</Link>
            {" • "}
            <Link href="/static/quad-tree">Website</Link>
          </div>
          <div className="flex max-lg:justify-center max-lg:items-center max-lg:aspect-square flex-row gap-x-5">
            <SizeAwareDiv className="flex justify-center items-center aspect-square max-lg:basis-3/3 lg:basis-1/3">
              {({ height, width }) => (
                <LazyLoadImage
                  src={`https://res.cloudinary.com/dg25vxfyl/image/upload/w_${width},h_${height},q_100/v1747301193/apple_quad_tree.webp`}
                  height={height}
                  width={width}
                  alt="Apple re-drawn using quadTree image transformation"
                />
              )}
            </SizeAwareDiv>
            <SizeAwareDiv className="flex justify-center items-center aspect-square basis-1/3 max-lg:hidden">
              {({ height, width }) => (
                <LazyLoadImage
                  src={`https://res.cloudinary.com/dg25vxfyl/image/upload/w_${width},h_${height},q_100/v1747301193/nyc_quad_tree.webp`}
                  height={height}
                  width={width}
                  alt="NYC street re-drawn using quadTree image transformation"
                />
              )}
            </SizeAwareDiv>
            <SizeAwareDiv className="flex justify-center items-center aspect-square basis-1/3 max-lg:hidden">
              {({ height, width }) => (
                <LazyLoadImage
                  src={`https://res.cloudinary.com/dg25vxfyl/image/upload/w_${width},h_${height},q_100/v1747301193/starry_night_quad_tree.webp`}
                  height={height}
                  width={width}
                  alt="Starry night re-drawn using quadTree image transformation"
                />
              )}
            </SizeAwareDiv>
          </div>
        </div>

        {/* Halite 3 */}
        <Break />
        <div className="max-w-5xl mx-auto pb-4" id="halite-3">
          <SubTitle>
            Halite III <PastDate>October 2018</PastDate>
          </SubTitle>
          <div className="flex lg:flex-row max-lg:flex-col">
            <div className="lg:pr-6 basis-2/3">
              <Text className="text-2xl">Create and compete against other intelligent bots</Text>
              <>
                <Text className="py-2 text-[18px]">
                  <Link href="https://github.com/HaliteChallenge/Halite-III">Halite III</Link> is a game created and
                  hosted by Two Sigma to see who can create the best overall artificial intelligence bots to collect
                  resources.
                </Text>
                <Text className="py-2 text-[18px]">
                  I thought the contest looked fun and overall it was. My code is in python and I ended up placing top
                  2000 overall. The experience was interesting to say the least even though my strategies were
                  innefficent they were still good enough to place highly in the contest. Would like to compete again in
                  the future however it seems future contests are discontinued for the time being.
                </Text>
              </>
              <div className="text-lg pb-[10px]">
                Links: <Link href="https://github.com/AndrewVetovitz/Halite-3-Contest">Github</Link>
              </div>
            </div>
            <SizeAwareDiv className="flex justify-center items-center aspect-square lg:pl-6 basis-1/3">
              {({ height, width }) => (
                <LazyLoadImage
                  src={`https://res.cloudinary.com/dg25vxfyl/image/upload/w_${width},h_${height},q_100/v1747301193/halite_III.webp`}
                  height={height}
                  width={width}
                  alt="Halite 3 competition board example drawn"
                />
              )}
            </SizeAwareDiv>
          </div>
        </div>

        {/* Old Quad Tree Imaging */}
        <Break />
        <div className="max-w-5xl mx-auto" id="quad-tree-depreciated">
          <SubTitle>
            Quad Tree Imaging (V1) (Depreciated) <PastDate>December 2016</PastDate>
          </SubTitle>
          <Text className="text-2xl">Divide Images to create artwork</Text>
          <>
            <Text className="py-2 text-[18px]">
              Depreciated version of the above V2 <Link href="#quad-tree">project</Link>. See above for the superior web
              based version.
            </Text>
          </>
          <div className="text-lg">
            Links: <Link href="https://github.com/AndrewVetovitz/QuadTreeImaging/tree/master">Github</Link>
          </div>
        </div>
      </div>
    </>
  );
}
