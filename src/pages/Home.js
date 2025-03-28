import React from 'react'
import Products from './Products'
import Scroll from '../components/Scroll';

function Home() {
  return (
    <div className="min-h-screen bg-cover bg-gray-100">
      <Scroll/>
   <div className=" pt-16 flex flex-wrap gap-9 justify-center ">
     <Products
     id={1}
     image={'https://crepdogcrew.com/cdn/shop/files/image_e5312b8b-ca64-4aac-9515-0b6950e6bdd2.jpg?v=1689880101&width=2048'}
     category={"Basketball sneakers"}
     name={"Air Jordan 1 Hyper Royle"}
     desc={"The Air Jordan 1 Hyper Royal is a modern classic, blending white leather and blue suede for a vintage-inspired look.Featuring a light grey Swoosh, white laces, and a grey rubber outsole, this sneaker offers both style and comfort with Nike's Air cushioning technology. It's versatile enough for everyday wear and special occasions."}
     sellingprice={198}
     price={278}
     />
     <Products
     id={2}
     image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTppG58_Q6L-zdJQ8X_QwfoDk0VjVp5w0iQ&s '}
     category={"Sock type"}
     name={"Addidas yeezy zyon"}
     sellingprice={147}
     price={260}
     />
     <Products
     id={3}
     image={'https://crepdogcrew.com/cdn/shop/products/ADIDASYEEZYFOAMRNNROCHRE.png?v=1678354165&width=2048 '}
     category={"Slide/sleperes"}
     name={"Addidas Yeezy foam rnr (Orche) "}
     sellingprice={88}
     price={138}
     />
     <Products
     id={4}
     image={'https://static.nike.com/a/images/w_1536,c_limit,f_auto/hqxdmxs2cjpkifs4ekbf/air-jordan-6-travis-scott-release-date.jpg'}
     category={"Basketball sneakers"}
     name={"Air Jordan 6 Cactus jack (Cactus Green) "}
     sellingprice={326}
     price={403}
     />
     <Products
     id={5}
     image={'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png '}
     category={"Athletic sneakers"}
     name={"Nike Air Force 1 "}
     sellingprice={53}
     price={63}
     />
     <Products
     id={6}
     image={'https://crepdogcrew.com/cdn/shop/products/AJ1RETROHIGHOGRoyalToe_3.png?v=1673962356&width=2048'}
     category={"Basketball sneakers"}
     name={"Air Jordan 1 Royal toe"}
     sellingprice={135}
     price={160}
     />
     <Products
      id={7}
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32xYEobv9UztOiaoFAQBhZe8Z9Jd96PW23DrG35vrcXonPeLe8q_RpXo6teDD-_JivNY&usqp=CAU'}
      category={"Sneakers"}
      name={"Addidas Bad Bunny (Blue)"}
      sellingprice={197}
      price={205}
      /> 
      <Products
      id={8}  
      image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtboskU7qr115vC94NnS_JNDjLbz_3Xv0I9gPg0vmNPSddeh0nObGHXnC8QcJ-r53zT0o&usqp=CAU '}
      category={"Sneakers"}
      name={"Nike Air 90 Desert Camo"}
      sellingprice={150}
      price={173}
      />
      <Products
      id={9}
      image={'https://i.insider.com/6407ae87fe06040019bf445a?width=750&format=jpeg&auto=webp'}
      category={"Sneakers"}
      name={"Nike Air Force 1 Tiffany & Co. (Black)"}
      sellingprice={1200}
      price={1603}
      />
   </div>
   </div>
 )
 }

export default Home