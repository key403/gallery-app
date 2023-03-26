import React, {useState} from 'react'
import styles from "../styles/Gallery.module.scss"
import Image from 'next/image'
import Img1 from "../public/images/1.jpg"
import Img2 from "../public/images/2.jpg"
import Img3 from "../public/images/3.jpg"
import Img4 from "../public/images/4.jpg"
import Img5 from "../public/images/5.jpg"
import Img6 from "../public/images/6.jpg"
import Img7 from "../public/images/7.jpg"

const Gallery = () => {
  let data = [
    {
      id:1,
      imgSrc:Img1,
    },
    {
      id:2,
      imgSrc:Img2,
    },
    {
      id:3,
      imgSrc:Img3,
    },
    {
      id:4,
      imgSrc:Img4,
    },
    {
      id:5,
      imgSrc:Img5,
    },
    {
      id:6,
      imgSrc:Img6,
    },
    {
      id:7,
      imgSrc:Img7,
    },
  ]

  const [model, setModel] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState("")

  const getImg = (imgSrc)=> {
    setTempImgSrc(imgSrc)
    setModel(true)
  }
  const closeImg = ()=> {
    setModel(false)
  }

  return (
    <div>
      <div className={model? `${styles.module} ${styles.open}`: styles.module} onClick={closeImg}>
        <Image src={tempImgSrc} className={styles.imgShow}/>
      </div>

      <div className={styles.gallery}>
        {data.map((img,index)=> (
          <div className={styles.pics} key={index} onClick={()=> getImg(img.imgSrc)}>
            <Image src={img.imgSrc} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery