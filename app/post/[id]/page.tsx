interface Params {
  id: string;
}

interface RequestWithParams {
  params: Params;
}

async function getData(id: string) {
  const res = await fetch(`${process.env.BASE_URL}api/post/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page({ params }: RequestWithParams) {
  const id = params?.id;
  const data = await getData(id);
  return <div>{data.title}</div>;
}
