<<<<<<< HEAD
import client from "../../apolloClient";
import { gql } from "@apollo/client";
=======
import { graphQLClient } from "../../lib/graphqlClient";
import { gql } from "graphql-request";
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
import React from "react";
import Image from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
<<<<<<< HEAD

=======
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
import Head from "next/head";
import { useRouter } from "next/router";
import { calculateReadingTime } from "../../utils/helper";
import { ArticleJsonLd } from "next-seo";
<<<<<<< HEAD

interface IBlogDeatils {
=======
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blurHashToDataURL } from "@/utils/blurhash";

interface IBlogDetails {
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
  title: string;
  slug: string;
  shortDescription: string;
  image: {
    url: string;
  };
  updatedAt: string;
  content: {
    raw: any;
    text: string;
  };
<<<<<<< HEAD
=======
  blurHash: string
}

interface BlogQueryResponse {
  blogs: IBlogDetails[];
}

interface RelatedBlogQueryResponse {
  blogs: IBlogDetails[];
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
}

const BlogDetails = ({
  blog,
  relatedBlogs,
}: {
<<<<<<< HEAD
  blog: IBlogDeatils;
  relatedBlogs: any;
=======
  blog: IBlogDetails;
  relatedBlogs: IBlogDetails[];
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
}) => {
  const router = useRouter();

  return (
<<<<<<< HEAD
    <div className="text-primary bg-pri_green ">
=======
    <div className="">
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
      <ArticleJsonLd
        title={blog?.title}
        description={blog?.shortDescription || ""}
        url={`https://bawarchiatlanta.com/${blog?.slug}`}
        images={[blog?.image?.url]}
        datePublished={blog?.updatedAt}
        authorName={"Bawarchi Atlanta"}
      />
      <Toaster
        position="top-right"
        containerStyle={{
          position: "absolute",
          top: 80,
          right: 20,
        }}
      />
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog?.shortDescription} />
        <link rel="canonical" href={`https://bawarchiatlanta.com/blogs`} />
        {/* OG Tags */}
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:url"
          content={`https://bawarchiatlanta.com/blogs/${blog?.slug}`}
        />
        <meta property="og:image" content={blog?.image?.url} />
        <meta property="og:type" content="business" />
        <meta property="og:description" content={blog?.shortDescription} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content={blog.title} />
        <meta property="twitter:description" content={blog?.shortDescription} />
        <meta
          property="twitter:url"
          content={`https://bawarchiatlanta.com/blogs/${blog?.slug}`}
        />
        <meta property="twitter:image" content={blog?.image?.url} />
      </Head>
<<<<<<< HEAD
      <div className="pt-[72px] md:pt-28">
        <div className="">
          <div className="max-w-4xl mx-auto py-10 md:py-14 w-11/12">
            <h1 className={`text-2xl md:text-5xl font-bold `}>{blog?.title}</h1>
=======
      <Navbar/>

      <div className="pt-20 bg-bg3">
        <div className="relative">

          <div className="max-w-4xl mx-auto py-10 md:py-14 w-11/12">
         
            <h1 className={`text-2xl md:text-5xl  font-bebas `}>{blog?.title}</h1>
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
            <div className="font-bold pt-4 flex gap-x-2 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
<<<<<<< HEAD
              <div className={` flex justify-between w-full`}>
=======
              <div className={` flex justify-between w-full font-rubik`}>
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
                <p>
                  {calculateReadingTime(blog?.content?.text)} minute reading
                </p>
                <p
                  className="font-normal space-x-2 flex items-center justify-start ml-auto text-lightBlack text-xs cursor-pointer"
                  onClick={() => {
                    let blogUrl = `https://bawarchiatlanta.com/blogs/${blog.slug}`;
                    navigator.clipboard.writeText(blogUrl);
                    toast.success("Share link copied to clipboard!", {
                      duration: 3000,
                    });
                  }}
                >
<<<<<<< HEAD
                  <span className="font-bold">Share </span>
=======
                  <span className="font-bold ">Share </span>
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
            <Image
              src={blog?.image?.url}
              alt={blog?.title}
              width={1600}
              height={900}
<<<<<<< HEAD
              className="aspect-video object-cover rounded-md"
            />
          </div>
          <div className="max-w-4xl mx-auto w-10/12">
=======
              placeholder="blur"
              blurDataURL={blurHashToDataURL(blog?.blurHash)}
              className="aspect-video object-cover rounded-md"
            />
          </div>
          <div className="max-w-4xl mx-auto w-10/12 font-rubik">
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
            <p className="text-lg  py-7 font-bold">{blog?.shortDescription}</p>
            <div className="prose prose-teal leading-8 pb-8 font-">
              <RichText content={blog?.content?.raw?.children} />
            </div>
            {!relatedBlogs.length && <hr className="bg-primary h-[2px]" />}
          </div>
          {relatedBlogs.length > 0 && (
            <div className="pb-12 bg-primary">
              <>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-center py-7 whitespace-nowrap text-pri_green">
                    Other Blogs
                  </h2>
                </div>
                <div className="flex flex-wrap gap-6 mx-auto justify-center items-center w-11/12">
                  {relatedBlogs &&
<<<<<<< HEAD
                    relatedBlogs.map((blog: any) => (
=======
                    relatedBlogs.map((blog: IBlogDetails) => (
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
                      <Link href={`/blogs/${blog?.slug}`} key={blog?.title}>
                        <article className="overflow-hidden shadow transition hover:shadow-lg text-pri_green max-w-sm">
                          <Image
                            src={blog?.image?.url}
                            alt={blog?.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
<<<<<<< HEAD
=======
                            placeholder="blur"
                            blurDataURL={blurHashToDataURL(blog?.blurHash)}
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
                          />

                          <div className="bg-[#f5e5d5] p-4 sm:p-6">
                            <p className="text-pri_green/50 text-sm pb-1">
                              {calculateReadingTime(blog?.content.text)} min
                              reading
                            </p>
                            <h3 className="mt-0.5 text-lg">{blog?.title}</h3>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed">
                              {blog?.shortDescription}
                            </p>
                          </div>
                        </article>
                      </Link>
                    ))}
                </div>
              </>
            </div>
          )}
        </div>
      </div>
<<<<<<< HEAD
=======
      <Footer/>
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
    </div>
  );
};

export default BlogDetails;
<<<<<<< HEAD
export async function getServerSideProps({ params }: { params: any }) {
  const { data } = await client.query({
    query: gql`
    query Blogs {
      blogs(where: { slug: "${params.slug}" }) {
        title
        slug
        shortDescription
=======

export async function getServerSideProps({ params }: { params: any }) {
  const GET_BLOG_QUERY = gql`
    query GetBlog($slug: String!) {
      blogs(where: { slug: $slug }) {
        title
        slug
        shortDescription
        blurHash
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
        image {
          url
        }
        content {
          raw
          text
        }
<<<<<<< HEAD
      }
    }
  `,
  });

  if (!data.blogs.length) {
    return {
      notFound: true,
    };
  }

  const { data: relatedBlog, error: relatedError } = await client.query({
    query: gql`
      query Blogs {
      blogs( first:3,where: { slug_not: "${params.slug}" }) {
=======
        updatedAt
      }
    }
  `;

  const GET_RELATED_BLOGS_QUERY = gql`
    query GetRelatedBlogs($slug: String!) {
      blogs(first: 3, where: { slug_not: $slug }) {
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
        title
        slug
        shortDescription
        updatedAt
<<<<<<< HEAD
=======
        blurHash
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
        image {
          url
        }
        content {
          raw
          text
        }
<<<<<<< HEAD
        
      }
    }
    `,
  });
  if (!relatedBlog.blogs.length && relatedError) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: data.blogs[0],
      relatedBlogs: relatedBlog.blogs,
    },
  };
  revalidate: 60;
=======
      }
    }
  `;

  try {
    const { blogs }: BlogQueryResponse = await graphQLClient.request(GET_BLOG_QUERY, {
      slug: params.slug,
    });

    if (!blogs.length) {
      return {
        notFound: true,
      };
    }

    const { blogs: relatedBlogs }: RelatedBlogQueryResponse = await graphQLClient.request(GET_RELATED_BLOGS_QUERY, {
      slug: params.slug,
    });

    return {
      props: {
        blog: blogs[0],
        relatedBlogs,
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      notFound: true,
    };
    revalidate: 60;
  }
>>>>>>> d22cb41833bae537f572a600b40b46d0a24888e8
}
