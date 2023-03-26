import React from 'react'
import Footer from './Component/footer/Footer'
import Main from './Component/Main/Main'
import { ContextHandler } from './Component/Navbar/Context'
import Navbar from './Component/Navbar/Navbar'

function App() {
  return (
    <>
      <ContextHandler>
        <Navbar />
        <Main />
        <Footer />
        <p className='mt-[10%] border border-rose-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde vel molestias porro voluptatibus atque laudantium ad itaque hic quam perferendis animi distinctio doloribus iusto aspernatur non voluptatem voluptates, veritatis pariatur ipsa. Nobis voluptate dolor nam commodi earum, rerum alias sequi non consectetur ex, fugiat ipsum magnam voluptatibus sint quod officia provident ab iure, dolorum sunt illo nulla enim optio? Fuga, sapiente in veritatis dignissimos et repellendus! Iusto asperiores eius ipsam similique quis voluptate, eligendi eos facere expedita repudiandae assumenda est illum atque nulla, culpa corrupti natus tempora perspiciatis numquam eveniet? Aliquid illum dolore animi cum odio et repellat! Id nobis accusantium sapiente sint reiciendis vel veniam laudantium et non quae vitae quo, aliquam repudiandae eius perspiciatis voluptatem porro eveniet incidunt, ipsam rem ut ea aperiam. Modi, pariatur consectetur. At, laboriosam qui, nemo explicabo repellendus quidem illum obcaecati officia non, eius inventore? Vitae cupiditate deserunt dicta natus dolore quidem iste officiis, nobis maxime consequuntur ipsum veritatis, molestiae itaque optio delectus facere ducimus labore quaerat dignissimos nisi cum ex et eius? Fugiat, distinctio quis. Aut consequuntur velit repudiandae ullam repellendus dicta nostrum maxime magnam minus perferendis recusandae provident a, quaerat modi, consectetur voluptate dolorum blanditiis error inventore iusto quia, commodi fugiat nesciunt? Quam est voluptates ratione laudantium doloremque tempore ex cum ad optio neque voluptatum illo iste repellat nesciunt, aspernatur eveniet. Eum asperiores enim impedit, porro cupiditate amet error quo sequi? Deserunt totam earum tenetur deleniti sequi iure quo iste tempora cumque libero! Fuga commodi quaerat deserunt dolorum facere? Sequi voluptatem cupiditate quaerat, harum ad nemo earum quibusdam ea laboriosam natus quod, architecto aperiam. Numquam quas aperiam consequuntur adipisci, error nihil ducimus saepe earum. Cupiditate vitae aspernatur, sapiente corrupti quasi ipsam laborum numquam modi odit, placeat illo tempore eius aperiam assumenda? Nemo error optio inventore unde explicabo saepe repellat! Eum, omnis debitis?</p>
      </ContextHandler>
    </>
  )
}

export default App