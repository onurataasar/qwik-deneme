import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.github.com/onurataasar" target="_blank">
          Made with Qwik by Onur Ata Asar
        </a>
      </footer>
    </>
  );
});
