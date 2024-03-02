import Image from "next/image";
import { Html , Head} from "next/document";

function SlideShowImage() {
  return (
    <Html>
      <Head>

      </Head>
      <div className="-slider-container">
    <div className="-wrapper">
      <div className="-caroulsel">
        <Image
          src="/images/galina-n-miziNqvJx5M-unsplash.jpg" 
          width={500} 
          height={500} 
          alt="productImage" 
        />
        <Image
          src="/images/rachit-tank-2cFZ_FB08UM-unsplash.jpg" 
          width={500} 
          height={500} 
          alt="productImage" 
        />
        <Image
          src="/images/kiran-ck-LSNJ-pltdu8-unsplash.jpg" 
          width={500} 
          height={500} 
          alt="productImage" 
        />
        <Image
          src="/images/giorgio-trovato-K62u25Jk6vo-unsplash.jpg" 
          width={500} 
          height={500} 
          alt="productImage" 
        />
        <Image
          src="/images/irene-kredenets-KStSiM1UvPw-unsplash.jpg" 
          width={500} 
          height={500} 
          alt="productImage" 
        />
      </div>
    </div>
    </div>
    </Html>
  )
};

export default SlideShowImage;