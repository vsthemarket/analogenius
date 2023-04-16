"use client";
import { useState } from "react";
import { useSupabase } from "@/app/supabase-provider";

export default function LikeButton({ likes, userLiked = false, id, user }) {
  const [numOfLikes, setNumOfLikes] = useState(likes);
  const [updating, setUpdating] = useState(false);
  const [liked, setLiked] = useState(userLiked);
  const { supabase } = useSupabase();

  const handleLike = async () => {
    if (!user) return;
    setUpdating(true);
    setLiked(true);
    setNumOfLikes((prev) => prev + 1);
    const { data, error } = await supabase
      .from("queries")
      .update({ likes: likes + 1 })
      .eq("id", id);

    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .update({ likes: user.likes ? [...user.likes, id] : [id] })
      .eq("email", user.email)
      .select("*")
      .single();

    if (error || userError) {
      console.log(error);
      setUpdating(false);
      return;
    }
    setUpdating(false);
  };
  const handleUnlike = async () => {
    if (!user) return;
    setUpdating(true);
    setLiked(false);
    setNumOfLikes((prev) => prev - 1);
    const { data, error } = await supabase
      .from("queries")
      .update({ likes: likes - 1 })
      .eq("id", id);

    const { data: userData, error: userError } = await supabase
      .from("profiles")
      .update({
        likes: user.likes ? user.likes.filter((like) => like !== id) : [],
      })
      .eq("email", user.email)
      .select("*")
      .single();

    if (error || userError) {
      console.log(error);
      setUpdating(false);
      return;
    }
    setUpdating(false);
  };
  return (
    <div
      onClick={() => {
        if (updating) return;
        liked ? handleUnlike() : handleLike();
      }}
      className={`${
        liked ? "bg-slate-700" : ""
      }  cursor-pointer h-12 w-12 ml-2 mr-2 text-2xl rounded-md bg-base-100 flex justify-center items-center shadow-md`}
    >
      {" "}
      <p className="text-lg">🔥 {numOfLikes ? numOfLikes : 0}</p>{" "}
    </div>
  );
}
