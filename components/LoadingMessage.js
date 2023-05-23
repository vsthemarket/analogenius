export default function LoadingMessage() {
  return (
    <div className="flex flex-col justify-center items-center rounded-sm bg-gray-300 p-5">
      <div className="text-4xl animate-bounce">🚀</div>
      <div className="text-lg">Loading...</div>
      <p className="text-lg">
        Hang tight! Response times can vary, with some requests taking about
        10-15 seconds to process.
      </p>
    </div>
  );
}
