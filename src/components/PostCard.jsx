import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

function PostCard({
    $id,
    title,
    featuredImage
}) {
  return (
    <Link to = {`/post/${$id}`}>
      <div className='w-full bg-gray-400 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
            <img src={appwriteService.getFileView(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-bold'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard