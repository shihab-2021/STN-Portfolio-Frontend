"use client";
import PremiumBlogDetails from "@/components/modules/blogDetails/PremiumBlogDetails";
import Loading from "@/components/shared/Loading";
import React, { useEffect, useState } from "react";

export default function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [blogData, setBlogData] = useState({});
  const [blogContent, setBlogContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const { id } = await params;
        const detailData = await fetch(`https://dev.to/api/articles/${id}`);
        if (!detailData.ok) {
          throw new Error("Failed to fetch category data");
        }
        const blogDetailData = await detailData.json();

        setBlogData(blogDetailData);
        setBlogContent((prevContent) =>
          blogDetailData?.body_markdown !== prevContent
            ? blogDetailData?.body_markdown
            : prevContent
        );
        setIsLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.error(err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{ height: "75vh" }}
          className="flex justify-center items-center"
        >
          <Loading />
        </div>
      )}
      {!isLoading && (
        <PremiumBlogDetails blogData={blogData} blogContent={blogContent} />
      )}
    </>
  );
}
