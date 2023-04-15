"use client";
import { useState } from "react";
import { useSupabase } from "@/app/supabase-provider";

export default function LikeButton({
  favorite = false,
  favoritesArr,
  id,
  userId,
}) {
  const { supabase } = useSupabase();
  const [favorited, setFavorited] = useState(favorite);
  const [loading, setLoading] = useState(false);
  const handleUnfavorite = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .update({ favorites: favoritesArr.filter((fav) => fav !== id) })
      .eq("id", userId)
      .select("*")
      .single();

    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }

    setLoading(false);
    setFavorited(false);
  };
  const handleFavorite = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .update({ favorites: [...favoritesArr, id] })
      .eq("id", userId);

    if (error) {
      setLoading(false);
      console.log(error);
      return;
    }
    setLoading(false);
    setFavorited(true);
  };
  return (
    <div>
      <button
        type="button"
        onClick={favorited ? handleUnfavorite : handleFavorite}
        className={`btn mt-5 ${loading ? "loading" : ""}`}
      >
        {loading
          ? ""
          : favorited
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
    </div>
  );
}
