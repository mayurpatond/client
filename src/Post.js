import logo from './pexels.jpg';

export default function Post(){
    return(
        <div className='post'>
                <div className='image'>
                  <img src={logo} alt='Image is loading..'></img>
                </div>
                <div className='texts'>
                  <h2>this will be the heading of blog</h2>
                  <p className='info'>
                    <a className='author'>Author: mayur patond</a>
                    <time> 20 aug 2025</time>
                  </p>
                  <p>This will be the content of the blog</p>
                </div>
              </div>
    )
}