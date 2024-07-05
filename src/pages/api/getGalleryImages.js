import { supabase } from "../../supabaseClient";

export default async function handler(req, res) {
  try {
    // Fetch posts using the service role key
    const { data: posts, error } = await supabase
      .from("posts")
      .select("id, thumbnail");

    if (error) {
      console.error("Error fetching posts:", error);
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error:", error);
  }
}
