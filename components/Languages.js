import React from 'react'

function Languages() {
    return (
        <section className='languages'>
            <h2 className='languages--heading'>Front end</h2>
            <ul className='languages--list'>
                <li className='languages--list_item'>
                    <label className='languages--list_label' for="file">React</label>
                    <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
                </li>
                <li className='languages--list_item'>
                    <label className='languages--list_label' for="file">Javascript</label>
                    <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
                </li>
                <li className='languages--list_item'>
                    <label className='languages--list_label' for="file">CSS</label>
                    <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
                </li>
                <li className='languages--list_item'>
                    <label className='languages--list_label' for="file">Vue</label>
                    <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
                </li>
                <li className='languages--list_item'>
                    <label className='languages--list_label' for="file">Redux</label>
                    <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
                </li>
                <li className='languages--list_item'>
                    <label className='languages--list_label' for="file">React Native</label>
                    <progress className='languages--listprogress' id="file" max="100" value="70"> 70% </progress>
                </li>
            </ul>
        </section>
    )
}

export default Languages
