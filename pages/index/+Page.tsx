import { Link } from "../../components/Link";
import { Title } from "../../components/Title";

export default function Page() {
  return (
    <>
      <div className="max-w-5xl mx-auto">
        <section>
          <Title>Projects</Title>
          <div>A highlight of some of my personal projects</div>
        </section>

        <section>
          <Title>Table of contents</Title>
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
        <hr />
        <section className="max-w-5xl mx-auto pb-12" id="quad-tree">
          <div>
            <Title>Quad Tree Imaging V2</Title>
          </div>
          <div>
            <Title>Divide Images to create artwork</Title>
          </div>
          <div>
            <p>Description of how it works</p>
          </div>
          Links: <Link href="https://github.com/AndrewVetovitz/Quad-Tree-Imaging-2">Github</Link>
        </section>

        <hr />
        <section className="max-w-5xl mx-auto" id="quad-tree-depreciated">
          <div>
            <Title>Quad Tree Imaging V1 (Depreciated)</Title>
          </div>
          <div>
            <Title>Divide Images to create artwork</Title>
          </div>
          <div>
            <p>Description of how it works</p>
          </div>
          Links: <Link href="https://github.com/AndrewVetovitz/QuadTreeImaging/tree/master">Github</Link>
        </section>
      </section>
    </>
  );
}
