import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div className='blog container'>

            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is context API?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Context API is a new feature added in React version 16.3. It  enables  to exchange unique details and assists in solving prop-drilling from all levels of application. It allows one to share state across the entire app. This API is designed to share data that can be considered “global” for a tree of React components. Using this api we can avoid passing props.
                </div>
              </div>
            </div>


            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What is Semantic tag?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                Semantic tag are those that describe their meaning in a human and machine readable way. By using Semantic tag we can easily identify element/info would go in which section.it is much easier to read. It also help in seo.It gives better experience for users.
                </div>
              </div>
            </div>

            
            
          </div>
        </div>
    );
};

export default Blog;