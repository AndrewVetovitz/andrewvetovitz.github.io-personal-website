import { Link } from "../../components/Link";
import { Title } from "../../components/Title";

function Break() {
  return <hr className={"border-[#e8e7e7]"} />;
}

export default function Page() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <section>
          <Title className="text-3xl pt-4">Projects</Title>
          <div className="text-xl font-light">A highlight of some of my personal projects</div>
        </section>

        <section className="pb-6">
          <Title className="text-xl pt-4">Table of contents</Title>
          <ul>
            <li>
              <Link href="#quad-tree">Quad Tree Imaging</Link>
            </li>
            <li>
              <Link href="#quad-tree-depreciated">Quad Tree Imaging (Depreciated)</Link>
            </li>
          </ul>
        </section>
      </div>

      {/* Projects Section */}
      <section id="projects">
        <Break />
        <section className="max-w-5xl mx-auto pb-12" id="quad-tree">
          <div>
            <Title>Quad Tree Imaging (V2)</Title>
          </div>
          <div>
            <Title>Divide Images to create artwork</Title>
          </div>
          <div>
            <p className="py-2">
              <Link href="https://en.wikipedia.org/wiki/Quadtree">Quad Tree&apos;s</Link> are a data structure to, as
              the name implies, is a tree with 4 child nodes per parent; repeated n times. Generally this is used as a
              partition on two-dimensional space.
            </p>
            <p className="py-2">
              When I first started Computer Science I wanted a project to actually build some. I came across{" "}
              <Link href="https://www.michaelfogleman.com/projects/quads/">Michael Fogleman&apos;s</Link> implementation
              and thought it was simple enough and interesting enough to implement. It took me a few months, but the
              first version was done in Java. Years later I revisited this and implemented a web based version with WASM
              (because I needed an excuse to learn WASM).
            </p>
            <p className="py-2">
              You can check out the project in the below <Link href="">link</Link>. It has more features and
              customization than Michael&apos;s version.
            </p>
          </div>
          Links: <Link href="https://github.com/AndrewVetovitz/Quad-Tree-Imaging-2">Github</Link>{" "}
          <Link href="">Website</Link>
        </section>

        <Break />
        <section className="max-w-5xl mx-auto" id="quad-tree-depreciated">
          <div>
            <Title>Quad Tree Imaging (V1) (Depreciated)</Title>
          </div>
          <div>
            <Title>Divide Images to create artwork</Title>
          </div>
          <div>
            <p className="py-2">
              Depreciated version of the above <Link href="#quad-tree">project</Link>. See above for the superior web
              based version.
            </p>
          </div>
          Links: <Link href="https://github.com/AndrewVetovitz/QuadTreeImaging/tree/master">Github</Link>
        </section>
      </section>
    </>
  );
}
