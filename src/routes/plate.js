import PlateForms from "@/views/plate/forms";
import PlateTables from "@/views/plate/tables";

export default [
  {
    // 페이지
    path: `/plate`,
    name: "PagePlate",
    redirect: `/plate/forms`,
    children: [
      {
        path: `/plate/forms`,
        name: "PagePlateForms",
        component: PlateForms,
      },
      {
        path: `/plate/tables`,
        name: "PagePlateTables",
        component: PlateTables,
      },
    ],
  },
];
