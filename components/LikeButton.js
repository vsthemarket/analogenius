export default function LikeButton({ likes }) {
  return (
    <div className=" h-12 w-12 ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md">
      {" "}
      <p className="text-lg">🔥 {likes ? likes : 0}</p>{" "}
    </div>
  );
}
