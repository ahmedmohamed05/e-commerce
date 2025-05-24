export default function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-gray-200 border-t-[1px] border-gray-500 mt-10">
      <div className="container mx-auto max-md:px-1 flex flex-col md:flex-row">
        <div className="about">
          <p className="text-xl font-bold">About WatchHaven</p>
          <p className="text-gray-600 max-w-md">
            Discover premium timepieces from the world's most prestigious
            watchmakers.
          </p>
        </div>
        <div className="customer-services flex-1 w-full">
          <p className="text-xl font-bold">Customer Service</p>
          <br />
          <ul className="links *:block *:my-2">
            <a href="#" className="text-gray-600">
              Contact Us
            </a>
            <a href="#" className="text-gray-600">
              Shipping & Returns
            </a>
            <a href="#" className="text-gray-600">
              FAQ
            </a>
          </ul>
        </div>
        <div className="form">
          <p className="text-xl font-bold">NewsLetter</p>
          <p className="text-gray-600">
            Discover premium timepieces from the world's most prestigious
            watchmakers.
          </p>
          <form
            className="w-full flex mt-4 rounded overflow-hidden"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your email"
              name="email"
              className="flex-1 py-3 px-1.5 bg-white outline-none"
            />
            <button className="py-4 px-6 bg-gray-950 transition-colors hover:bg-gray-800 text-white cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="copy-rights text-center mt-10">
        © 2025 WatchHaven. All rights reserved.
      </div>
    </footer>
  );
}
