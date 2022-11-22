import { component$, useClientEffect$, useSignal, useStore, useStylesScoped$ } from '@builder.io/qwik';
import { DocumentHead, useLocation } from '@builder.io/qwik-city';
import styles from './counter.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
  
    const count = useSignal(0);

    
      return (
        <div className='flex flex-col gap-8 justify-center items-center py-16'>
         <h1 className='font-bold text-2xl'><code>useSignal</code> kullanılarak Counter örneği </h1>
         <p className='w-3/4 text-center'><code>const count = useSignal(0)</code> reaktif bir signal yaratan hook. React <code>useState</code> hook'u gibi çalışıyor. Bir başlangıç değeri alıyor ve reactive signal döndürüyor.</p>
         <p className='w-3/4 text-center'><code>setState</code> yerine <code>count.value = 0</code> gibi atamalar yapabiliyoruz.</p>
          <div className='text-4xl flex gap-8'>
                <button onClick$={()=> {count.value++}}>
                    +
                </button>
                    {count.value}
                <button onClick$={()=> {count.value--}}>
                    -
                </button>
          </div>
          <button className='bg-red-500 text-3xl' onClick$={()=> {count.value = 0}}>
            Sıfırla
          </button>
          <p className='w-3/4 text-center'><code>useStore</code> kullanılarak da yapılabilir. <code>useSignal</code> hookuna çok benzeyen bu hook initial value olarak object alıyor.</p>
        </div>
        
      );
    });
    
    export const head: DocumentHead = {
      title: 'Qwik Counter',
    };
    