import { MainLayout } from "../mainLayout";
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import LocaleRedirect from "../pages/LocaleRedirect";
import Homepage from "../pages/HomePage";

const routes = [
  {
    path: "/en/gb",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <LocaleRedirect>
            <Homepage />
          </LocaleRedirect>
        ),
      },
    ],
  },
];

export function createAppRouter(initialUrl) {
  if (typeof window === "undefined") {
    // Server-side: use memory router seeded with the incoming URL
    return createMemoryRouter(routes, {
      initialEntries: [initialUrl || "/"],
    });
  }
  // Client-side
  return createBrowserRouter(routes);
}

// Default export is the factory for flexibility
export default createAppRouter;
