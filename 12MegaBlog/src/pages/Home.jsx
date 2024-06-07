import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container,  PostCard} from '../components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';




function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

  
    { 
     if( authStatus === false )
     return (
        <div className="w-full py-8 mt-4 text-center">
        <Container>
            <div className="flex flex-wrap">
                <div className="p-2 w-full">
                    <h1 className="text-2xl font-bold hover:text-gray-500">
                        Login to read posts
                    </h1>
                </div>
            </div>
        </Container>
    </div>
    )
    }
    
    return posts ? (
        <div className='w-full py-8'>

        {/* <div>
            <Container>
                <IMageSlider />
            </Container>
        </div> */}

         <div className='pt-14 pb-5 ml-10'>
            <p className=' text-xl w-[11%] h-[7vh] text-center  p-2 rounded-lg bg-black text-white font-mono hover:bg-slate-600'>
            <Link to={`./All-Posts`}>
               All Posts
            </Link>
            </p>  
         </div>

            <Container>
              <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
              </div>
            </Container>
        </div>
     ) : null
  }

export default Home
