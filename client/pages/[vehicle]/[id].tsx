import { useRouter } from "next/router";

const ID = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Post: {id}</h1>
    </>
  );
};

export default ID;
