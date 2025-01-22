import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="w-full flex items-start justify-center min-h-screen py-8 px-4">
      <div className=" p-8  w-full md:w-[60%] ">
        <h1 className="text-primarypink text-center text-4xl py-4">Send us a message</h1>
        <h3 className="text-gray-600 text-center">We aim to respond to all email inquiries within 48 hours</h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primarypink"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primarypink"
            />
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primarypink"
            ></textarea>
          </div>

          <Button type="submit" className="mt-4 bg-primarypink hover:bg-primarypink/90 text-white">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
