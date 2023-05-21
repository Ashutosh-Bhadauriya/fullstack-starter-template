async function getData() {
  const res = await fetch(`${process.env.BASE_URL}api/post`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
