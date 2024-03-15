import client from "../../apolloClient";
import { gql } from "@apollo/client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { calculateReadingTime } from "../../utils/helper";
import Head from "next/head";
import Image from "next/image";
import catering from "../../assets/catering.jpg";

const Index = ({ FeaturedBlog }) => {
  const ref = useRef(null);
  const [blogs, setBlogs] = useState([]);
  const [offset, setOffset] = useState(2);
  const [hasMoreCaseStudies, sethasMoreCaseStudies] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await client.query({
        query: gql`
          query MyQuery {
            blogsConnection (orderBy: createdAt_ASC, first: ${offset}){
              edges {
                node {
                  title
                  slug
                  shortDescription
                  image {
                    url
                  }
                  content {
                    raw
                    text
                  }
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
                pageSize
              }
            }
          }
        `,
      });
      if (!error) {
        sethasMoreCaseStudies(data?.blogsConnection?.pageInfo?.hasNextPage);
        setBlogs(data.blogsConnection?.edges);
      } else {
        toast.error(error.message);
      }
    };

    fetchBlogs();
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreCaseStudies) {
        setOffset((prev) => prev + 3);
      }
    });

    if (observer && ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, hasMoreCaseStudies]);

  return (
    <div className="w-full mt-24">
      <Head>
        <title>{"Indian Food Blogs By Bawarchi Biryanis Atlanta"}</title>
        <link rel="canonical" href={`https://bawarchiatlanta.com/blogs`} />
        {/* OG Tags */}
        <meta
          property="og:title"
          content={"Indian Food Blogs by Bawarchi Biryanis Atlanta"}
        />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/debox/image/upload/v1651053975/BBA/BBA_Website_Images/Our%20Food/IMG_9750-Edit_OurFood_uaz7xd.jpg`}
        />

        <meta property="og:url" content={`https://bawarchiatlanta.com/blogs`} />

        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            "Make your events memorable with Bawarchi Biryanis Atlanta's exceptional Indian food catering. From intimate gatherings to large conferences, we cater to all, with custom menus to suit your budget and palate."
          }
        />
        <meta name="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content={"Indian Food Blogs by Bawarchi Biryanis Atlanta"}
        />
        <meta
          property="twitter:description"
          content={
            "Make your events memorable with Bawarchi Biryanis Atlanta's exceptional Indian food catering. From intimate gatherings to large conferences, we cater to all, with custom menus to suit your budget and palate."
          }
        />
        <meta
          property="twitter:url"
          content={`https://bawarchiatlanta.com/blogs`}
        />
      </Head>

      <div className="relative isolate overflow-hidden px-6 py-36 sm:py-40 lg:px-8">
        <Image
          src={
            "https://res.cloudinary.com/debox/image/upload/v1651053975/BBA/BBA_Website_Images/Our%20Food/IMG_9750-Edit_OurFood_uaz7xd.jpg"
          }
          alt="Bawarchi Atlanta's Catering Buffet"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1200}
          height={600}
        />
        <div className="bg-black/60 w-full h-full absolute left-0 top-0 -z-10"></div>
        <div className="mx-auto max-w-2xl text-center !z-10 ">
          <h2
            className={`text-3xl font-bold tracking-tight text-primary sm:text-5xl `}
          >
            Blogs
          </h2>
        </div>
      </div>

      <div
        className={`max-w-7xl mx-auto w-11/12 grid grid-cols-1 lg:grid-cols-3 gap-8  ${
          blogs.length > 0 && "py-12"
        }`}
      >
        {blogs.length > 0 &&
          blogs.map((blog) => (
            <Link href={`/blogs/${blog?.node?.slug}`} key={blog?.node?.title}>
              <article className="overflow-hidden shadow transition hover:shadow-lg text-pri_green ">
                <Image
                  src={blog?.node?.image?.url}
                  alt={blog?.node?.title}
                  width={600}
                  height={400}
                  className="h-56 w-full object-cover"
                />

                <div className="bg-[#f5e5d5] p-4 sm:p-6">
                  <p className="text-pri_green/70 text-sm pb-1">
                    {calculateReadingTime(blog?.node?.content.text)} min reading
                  </p>
                  <h3 className="mt-0.5 text-lg">{blog?.node?.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm/relaxed">
                    {blog?.node?.shortDescription}
                  </p>
                </div>
              </article>
            </Link>
          ))}
      </div>
      {blogs.length === 0 ? (
        <div className="py-20 grid place-items-center h-full">
          <p className="text-3xl text-center font-extrabold text-white">
            This place will fill in a while.
          </p>
        </div>
      ) : (
        ""
      )}
      {hasMoreCaseStudies ? (
        <div className="py-4 text-center text-primary font-medium" ref={ref}>
          Loading more items...
        </div>
      ) : null}
    </div>
  );
};

export default Index;
