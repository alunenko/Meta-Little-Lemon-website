import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <main>
        <article>
          <h1>Main post</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nemo eos officiis tenetur sunt et! Harum dolorem voluptas molestiae, eius culpa aperiam asperiores architecto deserunt aliquid numquam ea repellat quasi?</p>
        </article>
        <section>
          <article>
            <h2>1 post</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur expedita eos eum ea exercitationem debitis sed dolorem provident. Dignissimos officiis voluptatem saepe error quam vitae. Quasi, suscipit deleniti! Nesciunt, ex!</p>
          </article>
          <article>
            <h2>2 post</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita provident mollitia odit cum fugiat! Dolore, debitis eos expedita cum velit voluptatum dicta reiciendis nam temporibus nostrum atque minus, accusantium dignissimos.</p>
          </article>
        </section>
      </main>
    )
  }
}

export default Main