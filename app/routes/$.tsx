import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "404" },
    { name: "description", content: "404" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Duh,</h1>

      <p>
        It seems that you are trying to access a route that does not exist.
      </p>

    </div>
  );
}
