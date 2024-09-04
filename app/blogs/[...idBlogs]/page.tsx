"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
interface Params {
  blogsData: number;
  idBlogs: number;
  title: string;
  image: string;
  timeStudy: number;
  name: string;
}
interface Props {
  params: Params;
}
const blogs = [
  {
    idBlogs: 1,
    blogsData: 124,
    title: "Lập trình cơ bản",
    image:
      "data:image/jpeg;base64,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",
    timeStudy: 100,
    name: "Ngọ Văn Quý",
  },
  {
    idBlogs: 2,
    blogsData: 987,
    title: "ReactJS nâng cao",
    image:
      "data:image/png;base64,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",
    timeStudy: 30,
    name: "Trần Quốc Hai",
  },
  {
    idBlogs: 3,
    blogsData: 9876,
    title: "Học Next.js",
    image:
      "data:image/png;base64,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",
    timeStudy: 120,
    name: "Nguyễn Quảng An",
  },
];
export default function Page(props: Props) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const { params } = props;
  const blogsFill = blogs.filter((item) => {
    return item.idBlogs == params.idBlogs;
  });

  return (
    <div className="ml-[20px]">
      <Link
        className={`${
          pathName === "/blogs" ? "active" : ""
        } hover:text-gray-300 font-bold `}
        href={"/blogs"}
      >
        Trở về
      </Link>
      <h1 className="text-[30px]">
        Danh sách bài viết có Id : {params.idBlogs}
      </h1>{" "}
      <br />
      {blogsFill.map((item: any) => (
        <div key={item.blogsData}>
          <h2>
            + Title:<b> {item.title}</b>
          </h2>{" "}
          <br />
          <p>
            + Bài có Id là : <b>{item.blogsData}</b>{" "}
          </p>
          <br />
          <p>
            + Số giờ học : <b>{item.timeStudy}</b>
          </p>
          <br />
          <p>
            + Tác giả : <b>{item.name}</b>
          </p>{" "}
          <br />
          <p>
            <img src={item.image} alt={item.title} width={200} height={200} />
          </p>
        </div>
      ))}
    </div>
  );
}
