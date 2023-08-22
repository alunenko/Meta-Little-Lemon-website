import './App.css';

function App() {
  return (
    <>
      <header>
        <img src="" alt="logo" />
      </header>
      <nav>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
        </ul>
      </nav>
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
      <footer>&copy; Little Lemon {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
