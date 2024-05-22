import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Table from "@/components/Table";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "gVzvSnKFxmAswumLUQDUoE",
      token: "sWYdezFm4Q25PyBp3gNqDOMTVvVEOVRJCG4SF70F5RWLXqZb1A2jR8ZZvtOCTAMDnk6DTnj0IMt19NNYYTjw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);

PLASMIC.registerComponent(Table, {
  name: "Table",
  props:{
    name: "string",
    border: "string",
    padding: "string",
    borderCollapse: "string",
    header1: "string",
    header2: "string",
    data1: "string",
    data2: "string",
    backgroundColor: "string",
    color: "string",
    textAlign: "string",
  },
})