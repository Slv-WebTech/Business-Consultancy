import React from "react";

const posts = [
  {
    id: 1,
    title: "Reshape the landscape of social media",
    href: "#",
    description:
      "In an era where social media has become an integral part of our lives, new platforms are continually emerging, aiming to revolutionize the way we connect and communicate.",
    date: "Oct 04, 2023",
    datetime: "2023-10-04",
    category: { title: "Social", href: "#" },
    author: {
      name: "Michael Gass",
      role: "Author of Fuel Lines",
      href: "#",
      imageUrl: "../Images/pradeep.jpeg",
    },
  },
  {
    id: 1,
    title: "AI in Bussiness development",
    href: "#",
    description:
      "AI offers a wide range of benefits across a variety of industries and applications. It has the potential to transform the way that businesses, leading to increased efficiency, accuracy, personalization, and innovation.",
    date: "Feb 22, 2023",
    datetime: "2023-10-04",
    category: { title: "Tech", href: "#" },
    author: {
      name: "Vishnu S",
      role: "Administrator",
      href: "#",
      imageUrl: "../Images/joan.jpeg",
    },
  },
  {
    id: 1,
    title: "Can Marketing Really be a Revenue Engine?",
    href: "#",
    description:
      "It's a key question in today's business environment - can marketing really be a revenue engine, or is this current energy around marketing driving revenue just a fad that will blow over.",
    date: "Dec 10, 2022",
    datetime: "2022-04-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "S Srinivas",
      role: "Marketing Analist",
      href: "#",
      imageUrl: "../Images/suriya.jpeg",
    },
  },
  // More posts...
];

export default function Blogs() {
  return (
    <div className="bg-white py-24 sm:py-32" id="Blogs">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold capitalize tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-md">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a href={post.category.href} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-large text-gray-600 hover:bg-gray-100">
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-md leading-6 text-gray-500">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-md leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
