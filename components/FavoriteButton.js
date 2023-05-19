"use client";
import { useState } from "react";
import { useSupabase } from "@/app/supabase-provider";
import { useRouter } from "next/navigation";

export default function LikeButton({
  favorite = false,
  favoritesArr,
  id,
  userId,
}) {
  const { supabase } = useSupabase();
  const router = useRouter();
  const [favorited, setFavorited] = useState(favorite);
  const [loading, setLoading] = useState(false);
  const handleUnfavorite = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .update({
        favorites: favoritesArr ? favoritesArr.filter((fav) => fav !== id) : [],
      })
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
    router.refresh();
  };
  const handleFavorite = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .update({ favorites: favoritesArr ? [...favoritesArr, id] : [id] })
      .eq("id", userId);

    if (error) {
      setLoading(false);
      console.log(error);
      return;
    }
    setLoading(false);
    setFavorited(true);
    router.refresh();
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
