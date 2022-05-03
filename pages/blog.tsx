import * as React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import CryptoJS from 'crypto-js';


const API_URL_BLOG = 'https://blogidesign.herokuapp.com';
const POSTS_APIS = `${API_URL_BLOG}/posts`;

const timestamp = new Date().getTime();
const secretKey = process.env.SECRET_API_KEY;
const pubKey = process.env.NEXT_PUBLIC_API_KEY;
const concatHash = timestamp + secretKey + pubKey;
const cryptoHash = CryptoJS.MD5(concatHash).toString();
const auth = `ts=${timestamp}&apikey=${pubKey}&hash=${cryptoHash}`;
const numLimit = 55;
const numOff = 245;

const API_URL = 'https://gateway.marvel.com/v1/public';
const POSTS_URL = `${API_URL}/characters?${auth}`;
console.log(secretKey);
console.log(pubKey);
console.log(cryptoHash);
console.log(concatHash);
console.log(auth);
console.log(POSTS_URL);

type Post = {
    title: string
    content: string
}


function Blog({posts}) {
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }

export const getStaticProps: GetStaticProps = async (context) => {

    const res = await fetch(`${POSTS_APIS}`)
    const posts: Post[] = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }

export default Blog;