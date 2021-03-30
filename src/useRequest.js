import useSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json);
export const useGetPosts = (path) => {
  if (!path) {
    throw new Error("path is required");
  }
  const { data: posts, error } = useSWR(path, fetcher);
  return { posts, error };
};
