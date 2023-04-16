"use client";

export default function LoadingScreen() {
  // make the whole screen a loading screen with opacity 0.5 and a spinner
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="text-center space-x-1 space-y-1 mt-10">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 border-b-2 border-white-900 rounded-full animate-spin"></div>
        </div>
        <h2>loading</h2>
      </div>
    </div>
  );
}
