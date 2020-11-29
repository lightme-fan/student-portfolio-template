import React from 'react'
import blog from './../images/blog.png'

function Blog() {
    return (
        <section className='blog'>
            <h2>Blog</h2>
            <img src={blog} alt='Blog' />
            <p>
                In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.  
            </p>
            <p>
                Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
            </p>

            <div>Dev.to</div>
        </section>
    )
}

export default Blog
