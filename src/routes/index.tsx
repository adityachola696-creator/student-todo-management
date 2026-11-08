import { createFileRoute } from "@tanstack/react-router";
import App from "@/todo-app/App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "My To-Do Manager — Student Dashboard" },
      {
        name: "description",
        content: "Add tasks, mark them done and track your progress with My To-Do Manager.",
      },
      { property: "og:title", content: "My To-Do Manager — Student Dashboard" },
      {
        property: "og:description",
        content: "Add tasks, mark them done and track your progress with My To-Do Manager.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
