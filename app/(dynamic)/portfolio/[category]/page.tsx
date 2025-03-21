export default async function Category({params}: {params: {id: string}}){
  const {id}= await params;
  return (
    <div>Category: {id}</div>
  );
}