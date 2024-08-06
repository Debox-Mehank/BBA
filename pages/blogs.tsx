"use client"

import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import BlogTopSection from '../components/BlogTopSection';
import BlogContentSection from "../components/BlogContentSection";
import {graphQLClient} from "../lib/graphqlClient";
import { gql } from 'graphql-request';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [offset, setOffset] = useState(2);
  const [hasMoreBlogs, setHasMoreBlogs] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await graphQLClient.request(gql`
          query MyQuery($offset: Int!) {
            blogsConnection(orderBy: createdAt_ASC, first: $offset) {
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
        `, { offset });

        const data = response?.blogsConnection;
        setHasMoreBlogs(data.pageInfo.hasNextPage);
        setBlogs(data.edges);

      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBlogs();
  }, []);
  console.log(blogs);

  return (
    <div>
      <Navbar />
      <BlogTopSection />
      <BlogContentSection blogs={blogs} />
      <Footer />
    </div>
  )
}

export default Blogs;
