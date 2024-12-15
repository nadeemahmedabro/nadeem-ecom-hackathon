// pages/index.tsx
import Image from 'next/image';

// Individual Product Components
const Product1 = () => (
  <div className="text-center">
    <Image 
      src="/images/product-1.jpg" 
      alt="Product 1" 
      width={150} 
      height={150} 
      className="mx-auto"
    />
    <h3 className="text-lg font-medium mt-4">Product 1</h3>
    <p className="text-gray-500 mt-2">$99.00</p>
  </div>
);

const Product2 = () => (
  <div className="text-center">
    <Image 
      src="/images/product-2.jpg" 
      alt="Product 2" 
      width={150} 
      height={150} 
      className="mx-auto"
    />
    <h3 className="text-lg font-medium mt-4">Product 2</h3>
    <p className="text-gray-500 mt-2">$149.00</p>
  </div>
);

const Product3 = () => (
  <div className="text-center">
    <Image 
      src="/images/product-3.jpg" 
      alt="Product 3" 
      width={150} 
      height={150} 
      className="mx-auto"
    />
    <h3 className="text-lg font-medium mt-4">Product 3</h3>
    <p className="text-gray-500 mt-2">$199.00</p>
  </div>
);

const Product4 = () => (
  <div className="text-center">
    <Image 
      src="/images/product-4.jpg" 
      alt="Product 4" 
      width={150} 
      height={150} 
      className="mx-auto"
    />
    <h3 className="text-lg font-medium mt-4">Product 4</h3>
    <p className="text-gray-500 mt-2">$249.00</p>
  </div>
);

// Individual Blog Components
const Blog1 = () => (
  <div className="text-center">
    <Image 
      src="/images/blog-1.jpg" 
      alt="Blog 1" 
      width={300} 
      height={200} 
      className="rounded-lg"
    />
    <h3 className="text-xl font-semibold mt-4">Going on all with millenial deisgns</h3>
    <p className="text-gray-500 mt-2">Read more</p>
  </div>
);

const Blog2 = () => (
  <div className="text-center">
    <Image 
      src="/images/blog-2.jpg" 
      alt="Blog 2" 
      width={300} 
      height={200} 
      className="rounded-lg"
    />
    <h3 className="text-xl font-semibold mt-4">Going on all with millenial designs</h3>
    <p className="text-gray-500 mt-2">Read more</p>
  </div>
);

const Blog3 = () => (
  <div className="text-center">
    <Image 
      src="/images/blog-3.jpg" 
      alt="Blog 3" 
      width={300} 
      height={200} 
      className="rounded-lg"
    />
    <h3 className="text-xl font-semibold mt-4">Going on all with millenial designs</h3>
    <p className="text-gray-500 mt-2">Read more</p>
  </div>
);

export default function Home() {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-8">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="/" className="text-lg font-semibold text-gray-900">Home</a>
            <a href="/shop" className="text-lg font-semibold text-gray-900">Shop</a>
            <a href="/about" className="text-lg font-semibold text-gray-900">About</a>
            <a href="/contact" className="text-lg font-semibold text-gray-900">Contact</a>
          </div>
          <div className="flex space-x-4 items-center">
            <button className="text-lg font-semibold text-gray-900">Login</button>
            <button className="text-lg font-semibold text-gray-900">Cart</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-yellow-100 flex justify-center items-center py-16 px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Rocket single seater</h1>
          <p className="text-gray-600 mt-4">Best comfort at your fingertips</p>
          <button className="mt-8 px-8 py-3 bg-gray-900 text-white font-semibold rounded-full">Shop Now</button>
        </div>
        <div className="ml-8">
          <Image 
            src="/images/rocket-chair.jpg" 
            alt="Rocket single seater" 
            width={300} 
            height={300} 
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Side Table Section */}
      <section className="py-16 grid grid-cols-2 gap-8">
        <div className="text-center">
          <Image 
            src="/images/side-table.jpg" 
            alt="Side table" 
            width={200} 
            height={200} 
            className="mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Side table</h2>
          <p className="text-gray-500">New design</p>
        </div>
        <div className="text-center">
          <Image 
            src="/images/sofa-pillow.jpg" 
            alt="Sofa Pillow" 
            width={200} 
            height={200} 
            className="mx-auto"
          />
          <h2 className="text-xl font-semibold mt-4">Sofa pillow</h2>
          <p className="text-gray-500">New collection</p>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-center">Top Picks For You</h2>
        <div className="grid grid-cols-4 gap-8 mt-8 px-16">
          <Product1 />
          <Product2 />
          <Product3 />
          <Product4 />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Our Blogs</h2>
        <div className="grid grid-cols-3 gap-8 mt-8 px-16">
          <Blog1 />
          <Blog2 />
          <Blog3 />
        </div>
      </section>

      {/* Instagram Section (Light Baby Pinkish Background) */}
      <section className="bg-pink-100 py-16 text-center">
        <h2 className="text-3xl font-bold">Our Instagram</h2>
        <p className="text-gray-600 mt-4">Follow our store on Instagram</p>
        <button className="mt-4 px-6 py-2 bg-gray-900 text-white font-semibold rounded-full">Follow Us</button>
      </section>

      {/* Footer (White Background) */}
      <footer className="bg-white text-black py-8">
        <div className="container mx-auto flex justify-between">
          <div>
            <p className="text-lg font-semibold">Links</p>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold">Help</p>
            <ul>
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold">Newsletter</p>
            <div className="flex items-center">
              <input 
                type="email" 
                className="px-4 py-2 rounded-l-lg border border-gray-300" 
                placeholder="Enter Your Email Address" 
              />
              <button className="px-6 py-2 bg-gray-900 text-white rounded-r-lg">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Meubel House. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


