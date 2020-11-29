import React from 'react'

function Profile() {
    return (
        <section className='profile'>
            <img className='profile--photo' scr='' alt='Profile photo'/>
            <div className='profile--desc'>
                <header className='profile--heading'>
                    <h2 className='profile--heading_text'>Billy Pearson<br/> <small>Front-end developer</small></h2>
                    <div className='profile--heading_contact'>
                        <span className='profile--heading_email'>billy@example.com</span><br/>
                        <span className='profile--heading_phone-number'>(+603) 546 624 342</span>
                    </div>
                </header>
                <div className='profile--text'>
                    <p className='profile--text_first'>
                        Self-motivated developer, who is willing to learn and create outstanding UI applications. 
                    </p>
                    <p className='profile--text_second'>
                        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Profile
