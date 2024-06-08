import React, { useEffect, useState } from 'react';
import { Carousel } from '@mantine/carousel';
import appwriteService from '../appwrite/config'; // Ensure this path is correct based on your project structure
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'; // Updated import for icons
import {Link} from 'react-router-dom'


const CarouselComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((response) => {
      if (response) {
        setPosts(response.documents);
      }
    });
  }, []);

  return (
   <Carousel
   withIndicators
   loop
   height={400}
   align="center"
   controlSize={30}
   nextControlIcon={<KeyboardArrowRight />}
   previousControlIcon={<KeyboardArrowLeft />}
   controlsOffset="sm"
 >
   
     {posts.map((post) => (
       <Carousel.Slide key={post.$id}>
        <Link to={`./post/$${post.$id}`}>
         <div style={{ position: 'relative'  }}>
           <img
             src={appwriteService.getFilePreview(post.featuredImage)}
             alt={post.title}
             style={{
              width: '100%', height: '400px', objectFit: 'cover'
             }}
           />
           <div
             style={{
              position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                padding: '10px',
                textAlign: 'center',
            }}

           >
             {post.title}
           </div>
         </div>
         </Link>
       </Carousel.Slide>
     ))}
   </Carousel>
 );
};
export default CarouselComponent;